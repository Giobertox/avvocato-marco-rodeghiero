import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { buildFaviconBundle } from '../lib/favicons.mjs';

const svg = await readFile(new URL('../src/branding/favicon.svg', import.meta.url), 'utf8');
const bundle = await buildFaviconBundle(svg);
const publicDir = resolve('public');
for (const [path, content] of bundle) {
  const output = resolve(publicDir, path);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, content);
}
console.log(`Generated ${bundle.size} favicon exports from src/branding/favicon.svg.`);
