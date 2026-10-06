import { readFile, writeFile, mkdir } from 'node:fs/promises';
import sharp from 'sharp';

// Sharp is supplied by the existing Astro image toolchain. No external assets or fonts.
// Run from website/: npm run icons. Generated files are committed with the SVG source.
const source = await readFile('public/favicon.svg');
await mkdir('public/icons', { recursive: true });
async function png(size, opaque = false) {
  let image = sharp(source).resize(size, size);
  if (opaque) image = image.flatten({ background: '#6a0d0f' });
  return image.png().toBuffer();
}
for (const [name, size, opaque] of [
  ['favicon-16.png', 16, false],
  ['favicon-32.png', 32, false],
  ['apple-touch-icon.png', 180, true],
  ['icon-192.png', 192, true],
  ['icon-512.png', 512, true],
]) {
  await writeFile(`public/icons/${name}`, await png(size, opaque));
}

// Multi-resolution ICO with PNG frames for browsers that do not use the SVG icon.
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map(size => png(size)));
const header = Buffer.alloc(6 + frames.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = header.length;
frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  header[entry] = header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(frame.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile('public/favicon.ico', Buffer.concat([header, ...frames]));

for (const locale of ['it', 'en']) {
  await writeFile(`public/site-${locale}.webmanifest`, JSON.stringify({
    name: 'Studio Legale Avv. Marco Rodeghiero',
    short_name: locale === 'it' ? 'MR Studio Legale' : 'MR Legal Practice',
    lang: locale,
    start_url: `./${locale}/`,
    scope: './',
    display: 'browser',
    background_color: '#faf8f3',
    theme_color: '#6a0d0f',
    icons: [192, 512].map(size => ({
      src: `./icons/icon-${size}.png`, sizes: `${size}x${size}`, type: 'image/png', purpose: 'any',
    })),
  }, null, 2) + '\n');
}
console.log('Generated ICO, five PNG icons, and Italian/English manifests from favicon.svg.');
