// Shared by Astro head rendering and the icon-export CLI. Public files are exports.
export const practiceName = 'Studio Legale Avv. Marco Rodeghiero';
const version = 'mr3';
const shortNames = { it: 'MR Studio Legale', en: 'MR Legal Practice' };
const pngIcons = [
  { path: '/icons/favicon-16.png', size: 16, opaque: false, rel: 'icon' },
  { path: '/icons/favicon-32.png', size: 32, opaque: false, rel: 'icon' },
  { path: '/icons/apple-touch-icon.png', size: 180, opaque: true, rel: 'apple-touch-icon' },
  { path: '/icons/icon-192.png', size: 192, opaque: true, manifest: true },
  { path: '/icons/icon-512.png', size: 512, opaque: true, manifest: true },
];
const icoSizes = [16, 32, 48];
const versioned = path => `${path}?v=${version}`;

function palette(svg) {
  const background = svg.match(/<rect\b[^>]*fill="(#[\da-f]{6})"/i)?.[1];
  const foreground = svg.match(/<path\b[^>]*fill="(#[\da-f]{6})"/i)?.[1];
  if (!background || !foreground) throw new Error('Favicon SVG must declare hex background and foreground colours.');
  return { background, foreground };
}

/** Rendering policy; the Astro adapter only prefixes the returned asset paths. */
export function faviconHead(svg, locale = 'it') {
  if (!Object.hasOwn(shortNames, locale)) throw new Error(`Unsupported favicon locale: ${locale}`);
  return {
    themeColor: palette(svg).background,
    shortName: shortNames[locale],
    links: [
      { rel: 'icon', type: 'image/x-icon', sizes: icoSizes.map(size => `${size}x${size}`).join(' '), href: versioned('/favicon.ico') },
      ...pngIcons.filter(icon => icon.rel).map(icon => ({
        rel: icon.rel, type: icon.rel === 'icon' ? 'image/png' : undefined,
        sizes: `${icon.size}x${icon.size}`, href: versioned(icon.path),
      })),
      { rel: 'icon', type: 'image/svg+xml', sizes: 'any', href: versioned('/favicon.svg') },
      { rel: 'manifest', href: versioned(`/site-${locale}.webmanifest`) },
    ],
  };
}

/** Return a complete export bundle; callers choose where to write it. */
export async function buildFaviconBundle(svg) {
  const { background, foreground } = palette(svg);
  const { default: sharp } = await import('sharp');
  const source = Buffer.from(svg);
  async function png(size, opaque = false) {
    let image = sharp(source).resize(size, size);
    if (opaque) image = image.flatten({ background });
    return image.png().toBuffer();
  }
  const bundle = new Map([['favicon.svg', source]]);
  for (const icon of pngIcons) bundle.set(icon.path.slice(1), await png(icon.size, icon.opaque));

  // Multi-resolution ICO containing actual PNG frames, with no platform font dependency.
  const frames = await Promise.all(icoSizes.map(size => png(size)));
  const header = Buffer.alloc(6 + frames.length * 16);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);
  let offset = header.length;
  frames.forEach((frame, index) => {
    const entry = 6 + index * 16;
    header[entry] = header[entry + 1] = icoSizes[index];
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(frame.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += frame.length;
  });
  bundle.set('favicon.ico', Buffer.concat([header, ...frames]));

  for (const locale of Object.keys(shortNames)) {
    bundle.set(`site-${locale}.webmanifest`, JSON.stringify({
      name: practiceName, short_name: shortNames[locale], lang: locale,
      start_url: `./${locale}/`, scope: './', display: 'browser',
      background_color: foreground, theme_color: background,
      icons: pngIcons.filter(icon => icon.manifest).map(icon => ({
        src: versioned(`.${icon.path}`), sizes: `${icon.size}x${icon.size}`, type: 'image/png', purpose: 'any',
      })),
    }, null, 2) + '\n');
  }
  return bundle;
}
