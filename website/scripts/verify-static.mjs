import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, relative, sep } from 'node:path';
import config from '../astro.config.mjs';
import { indexingEnabled, robotsContent } from '../config/seo.mjs';
import sharp from 'sharp';

const root = resolve('dist');
const basePath = ('/' + (config.base || '/').replace(/^\/+|\/+$/g, '') + '/').replace(/^\/\/$/, '/');
const site = new URL(config.site);
async function filesIn(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? filesIn(join(dir, entry.name)) : [join(dir, entry.name)]))).flat();
}
const files = await filesIn(root);
const faviconSource = await readFile(join(root, 'favicon.svg'), 'utf8');
const sourceArtwork = await readFile(new URL('../src/branding/favicon.svg', import.meta.url), 'utf8');
const iconBackground = faviconSource.match(/<rect\b[^>]*fill="([^"]+)"/)?.[1];
const iconForeground = faviconSource.match(/<path\b[^>]*fill="([^"]+)"/)?.[1];
const failures = [];
if (faviconSource !== sourceArtwork) failures.push('Favicon exports are stale; run npm run icons.');
let localReferences = 0;
let externalScripts = 0;
let localScripts = 0;
let languageSwitches = 0;
let cssReferences = 0;
let sharingPreviews = 0;
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
  const meta = key => {
    const tags = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => match[0])
      .filter(tag => tag.includes(`property="${key}"`) || tag.includes(`name="${key}"`));
    if (tags.length !== 1) failures.push(path + ': expected one ' + key + ' meta tag');
    return tags[0]?.match(/content="([^"]*)"/)?.[1];
  };
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = meta('description');
  if (!description || meta('og:title') !== title || meta('twitter:title') !== title || meta('og:description') !== description || meta('twitter:description') !== description) failures.push(path + ': inconsistent sharing text');
  const expectedShareURL = path === 'index.html' ? new URL(basePath + 'it/', site) : sourceURL;
  if (meta('og:url') !== expectedShareURL.href) failures.push(path + ': incorrect sharing page URL');
  if (meta('og:type') !== 'website' || meta('og:locale') !== (path.startsWith('en/') ? 'en_GB' : 'it_IT') || meta('og:site_name') !== 'Studio Legale Avv. Marco Rodeghiero') failures.push(path + ': incorrect sharing identity');
  const image = meta('og:image');
  const imageAlt = meta('og:image:alt');
  if (!imageAlt || meta('twitter:image:alt') !== imageAlt || meta('twitter:card') !== 'summary_large_image' || meta('twitter:image') !== image || meta('og:image:secure_url') !== image) failures.push(path + ': incomplete sharing card');
  let imageURL;
  try { imageURL = new URL(image); } catch { failures.push(path + ': invalid sharing image URL'); }
  if (!imageURL || imageURL.protocol !== 'https:' || imageURL.origin !== site.origin || !imageURL.pathname.startsWith(basePath)) failures.push(path + ': sharing image must be an absolute site HTTPS URL');
  else {
    await checkReference(image, sourceURL, path);
    const imagePath = decodeURIComponent(imageURL.pathname.slice(basePath.length));
    const imageFile = resolve(root, imagePath);
    if (!imageFile.startsWith(root + sep) || !imagePath.endsWith('.png')) failures.push(path + ': sharing image must be a local PNG');
    else {
      try {
        const actualImage = await sharp(imageFile).metadata();
        if (actualImage.format !== 'png' || actualImage.width !== 1200 || actualImage.height !== 630 || meta('og:image:type') !== 'image/png' || meta('og:image:width') !== String(actualImage.width) || meta('og:image:height') !== String(actualImage.height)) failures.push(path + ': sharing dimensions/type do not match the image');
      } catch { failures.push(path + ': sharing image could not be decoded'); }
    }
  }
  sharingPreviews++;
  if (/localhost|127\.0\.0\.1|\[::1\]/i.test(html)) failures.push(path + ': localhost in generated HTML');
  if (!iconBackground || html.match(/<meta name="theme-color" content="([^"]+)"/)?.[1] !== iconBackground) failures.push(path + ': browser theme does not match favicon');
  const robots = [...html.matchAll(/<meta name="robots" content="([^"]*)"/g)];
  if (robots.length !== 1 || robots[0][1] !== robotsContent(path === '404.html')) failures.push(path + ': incorrect indexing policy');
  if (path === 'it/profilo/index.html' || path === 'en/profile/index.html') {
    // The owner approved the supplied LinkedIn education/experience on 6 October 2026.
    // Keep rejecting draft placeholders and unsupported register/professorship claims.
    if (/Da confermare|Awaiting|portrait-placeholder|pending-box|Art\.?\s*356|accreditat|accredited|professore|professor\b/i.test(html)) failures.push(path + ': unconfirmed profile information is public');
    const approvedProfile = ['1997–2003', '2004–2007', '2011–2014', 'IUL', 'Lawlinguists', 'G.D.V.', 'Fondazione Progetto Ematologia Onlus'];
    for (const detail of approvedProfile) {
      if (!html.includes(detail)) failures.push(path + ': missing approved profile detail ' + detail);
    }
    const profileLink = [...html.matchAll(/<a\b[^>]*>/g)].find(match => match[0].includes('linkedin.com/in/marco-rodeghiero-70214328/'))?.[0];
    if (!profileLink?.includes('rel="noopener noreferrer"')) failures.push(path + ': missing or unsafe LinkedIn profile link');
  }
  if (pagePairs.slice(0, 2).flat().includes(path) || path === 'it/contatti/index.html' || path === 'en/contact/index.html') {
    const appointmentNotice = path.startsWith('it/') ? 'su appuntamento' : 'by appointment';
    if (!html.toLowerCase().includes(appointmentNotice)) failures.push(path + ': missing appointment notice');
  }
  if (path !== 'index.html') {
    if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) failures.push(path + ': expected one h1');
    const language = path.startsWith('en/') ? 'en' : 'it';
    if (!html.includes('<html lang="' + language + '">')) failures.push(path + ': wrong language');
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
    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
    if (canonical !== new URL(basePath + 'it/', site).href) failures.push(path + ': incorrect redirect canonical');
  }
  const scripts = html.match(/<(?:script|iframe)\b[^>]*>/gi) || [];
  let pageLocalScripts = 0;
  for (const tag of scripts) {
    const src = tag.match(/\bsrc="([^"]*)"/)?.[1];
    if (/^<script\b/i.test(tag) && src === basePath + 'scripts/mobile-navigation.js' && /\sdefer(?:\s|=|>)/i.test(tag)) {
      pageLocalScripts++;
      localScripts++;
    } else {
      externalScripts++;
      failures.push(path + ': unexpected script or embedded frame');
    }
  }
  if (pageLocalScripts !== (path === 'index.html' ? 0 : 1)) failures.push(path + ': incorrect mobile-navigation script count');
  for (const match of html.matchAll(/(?:href|src|poster)="([^"]*)"/g)) {
    await checkReference(match[1], sourceURL, path);
  }
  for (const match of html.matchAll(/srcset="([^"]*)"/g)) {
    if (!match[1].startsWith('data:')) {
      for (const candidate of match[1].split(',')) await checkReference(candidate.trim().split(/\s+/)[0], sourceURL, path);
    }
  }
}
for (const locale of ['it', 'en']) {
  const path = `site-${locale}.webmanifest`;
  const manifest = JSON.parse(await readFile(join(root, path), 'utf8'));
  const manifestURL = new URL(basePath + path, site);
  if (manifest.theme_color !== iconBackground || manifest.background_color !== iconForeground) failures.push(path + ': colours do not match favicon');
  if (manifest.lang !== locale || new URL(manifest.start_url, manifestURL).pathname !== basePath + locale + '/' || new URL(manifest.scope, manifestURL).pathname !== basePath) failures.push(path + ': wrong locale, start URL or scope');
  await checkReference(manifest.start_url, manifestURL, path);
  for (const icon of manifest.icons) await checkReference(icon.src, manifestURL, path);
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
console.log(JSON.stringify({ basePath, indexingEnabled, pages: htmlFiles.length, localReferences, languageSwitches, cssReferences, sharingPreviews, localScripts, externalScripts, failures }, null, 2));
if (failures.length) process.exitCode = 1;
