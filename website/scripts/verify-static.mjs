import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, relative, sep } from 'node:path';
import config from '../astro.config.mjs';

const root = resolve('dist');
const basePath = ('/' + (config.base || '/').replace(/^\/+|\/+$/g, '') + '/').replace(/^\/\/$/, '/');
const site = new URL(config.site);
async function filesIn(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? filesIn(join(dir, entry.name)) : [join(dir, entry.name)]))).flat();
}
const files = await filesIn(root);
const failures = [];
let localReferences = 0;
let externalScripts = 0;
let languageSwitches = 0;
let cssReferences = 0;
const pageTitles = new Set();
const htmlFiles = files.filter(file => file.endsWith('.html'));
const pagePairs = [
  ['it/index.html', 'en/index.html'],
  ['it/profilo/index.html', 'en/profile/index.html'],
  ['it/aree-di-attivita/index.html', 'en/practice-areas/index.html'],
  ['it/traduzioni-legali/index.html', 'en/legal-translations/index.html'],
  ['it/contatti/index.html', 'en/contact/index.html'],
];
const pageURL = path => new URL(basePath + path.replace(/index\.html$/, ''), site);

async function checkReference(href, sourceURL, sourcePath) {
  href = href.replaceAll('&amp;', '&');
  if (!href) return;
  const url = new URL(href, sourceURL);
  if (url.origin !== site.origin) return;
  if (!url.pathname.startsWith(basePath)) {
    failures.push(sourcePath + ': reference outside base ' + href);
    return;
  }
  const targetPath = decodeURIComponent(url.pathname.slice(basePath.length));
  let target = resolve(root, targetPath);
  if (!target.startsWith(root + sep) && target !== root) {
    failures.push(sourcePath + ': reference escapes the static directory');
    return;
  }
  try {
    if ((await stat(target)).isDirectory()) target = join(target, 'index.html');
    const content = await readFile(target, 'utf8');
    localReferences++;
    if (url.hash && target.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!content.includes('id="' + id + '"')) failures.push(sourcePath + ': missing fragment ' + href);
    }
  } catch {
    failures.push(sourcePath + ': missing local file ' + href);
  }
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const path = relative(root, file).replaceAll('\\', '/');
  const sourceURL = pageURL(path);
  if (/localhost|127\.0\.0\.1|\[::1\]/i.test(html)) failures.push(path + ': localhost in generated HTML');
  if (path !== 'index.html') {
    if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) failures.push(path + ': expected one h1');
    if (!/<meta name="robots" content="noindex, nofollow"/.test(html)) failures.push(path + ': missing staging noindex');
    const language = path.startsWith('en/') ? 'en' : 'it';
    if (!html.includes('<html lang="' + language + '">')) failures.push(path + ': wrong language');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    if (!title || pageTitles.has(title)) failures.push(path + ': absent or repeated page title');
    pageTitles.add(title);
    const pair = pagePairs.find(pair => pair.includes(path));
    if (pair) {
      const expected = pageURL(pair.find(other => other !== path)).pathname;
      const label = language === 'it' ? 'English' : 'Italiano';
      const link = [...html.matchAll(/<a\b[^>]*>/g)].find(match => match[0].includes('aria-label="' + label + '"'))?.[0];
      if (link?.match(/href="([^"]*)"/)?.[1] !== expected) failures.push(path + ': language switch does not reach ' + expected);
      else languageSwitches++;
    }
  } else {
    const refresh = html.match(/<meta\b[^>]*http-equiv="refresh"[^>]*content="[^"]*url=([^"]*)"/i)?.[1];
    if (refresh !== basePath + 'it/') failures.push(path + ': root redirect has wrong destination');
    if (refresh) await checkReference(refresh, sourceURL, path);
  }
  const scripts = html.match(/<(?:script|iframe)\b[^>]+(?:src=|srcdoc=)/gi) || [];
  externalScripts += scripts.length;
  if (scripts.length) failures.push(path + ': unexpected script or embedded frame');
  for (const match of html.matchAll(/(?:href|src|poster)="([^"]*)"/g)) {
    await checkReference(match[1], sourceURL, path);
  }
  for (const match of html.matchAll(/srcset="([^"]*)"/g)) {
    if (!match[1].startsWith('data:')) {
      for (const candidate of match[1].split(',')) await checkReference(candidate.trim().split(/\s+/)[0], sourceURL, path);
    }
  }
}
for (const file of files.filter(file => file.endsWith('.css'))) {
  const css = await readFile(file, 'utf8');
  const path = relative(root, file).replaceAll('\\', '/');
  const sourceURL = new URL(basePath + path, site);
  if (/localhost|127\.0\.0\.1|\[::1\]/i.test(css)) failures.push(path + ': localhost in generated CSS');
  const references = [
    ...[...css.matchAll(/url\(\s*['"]?([^'")\s]+)['"]?\s*\)/g)].map(match => match[1]),
    ...[...css.matchAll(/@import\s+['"]([^'"]+)['"]/g)].map(match => match[1]),
  ];
  for (const href of references) {
    cssReferences++;
    await checkReference(href, sourceURL, path);
  }
}
if (htmlFiles.length !== 12) failures.push('Expected 12 static pages; found ' + htmlFiles.length);
if (languageSwitches !== 10) failures.push('Expected 10 equivalent-page language switches; found ' + languageSwitches);
console.log(JSON.stringify({ basePath, pages: htmlFiles.length, localReferences, languageSwitches, cssReferences, externalScripts, failures }, null, 2));
if (failures.length) process.exitCode = 1;
