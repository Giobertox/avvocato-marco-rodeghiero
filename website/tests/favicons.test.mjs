import test from 'node:test';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import { faviconHead, buildFaviconBundle } from '../lib/favicons.mjs';

// Different colours from the real icon prove that export policy follows the input.
const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#123456"/><path fill="#faf0e0" d="M20 20h24v24H20z"/></svg>';

test('favicon rendering and generated artifacts agree on identity and usable paths', async () => {
  const bundle = await buildFaviconBundle(svg);
  assert.equal(bundle.size, 9);
  assert.equal(bundle.get('favicon.svg').toString(), svg);
  for (const [locale, shortName] of [['it', 'MR Studio Legale'], ['en', 'MR Legal Practice']]) {
    const head = faviconHead(svg, locale);
    assert.equal(head.themeColor, '#123456');
    assert.equal(head.shortName, shortName);
    assert.equal(head.links.length, 6);
    for (const link of head.links) {
      const url = new URL(link.href, 'https://example.com');
      assert.ok(bundle.has(url.pathname.slice(1)), `Missing head asset: ${link.href}`);
      assert.equal(url.search, '?v=mr3');
    }
    const manifest = JSON.parse(bundle.get(`site-${locale}.webmanifest`));
    assert.equal(manifest.name, 'Studio Legale Avv. Marco Rodeghiero');
    assert.equal(manifest.short_name, shortName);
    assert.equal(manifest.theme_color, '#123456');
    assert.equal(manifest.background_color, '#faf0e0');
    assert.equal(manifest.lang, locale);
    assert.equal(manifest.display, 'browser');
    for (const base of ['/', '/avvocato-marco-rodeghiero/']) {
      const manifestURL = new URL(`${base}site-${locale}.webmanifest`, 'https://example.com');
      assert.equal(new URL(manifest.start_url, manifestURL).pathname, `${base}${locale}/`);
      assert.equal(new URL(manifest.scope, manifestURL).pathname, base);
      for (const icon of manifest.icons) {
        const url = new URL(icon.src, manifestURL);
        assert.ok(bundle.has(url.pathname.slice(base.length)));
        assert.equal(url.search, '?v=mr3');
      }
    }
  }
  for (const [path, size] of [
    ['icons/favicon-16.png', 16], ['icons/favicon-32.png', 32],
    ['icons/apple-touch-icon.png', 180], ['icons/icon-192.png', 192], ['icons/icon-512.png', 512],
  ]) {
    const image = sharp(bundle.get(path));
    const metadata = await image.metadata();
    assert.equal(metadata.format, 'png');
    assert.equal(metadata.width, size);
    assert.equal(metadata.height, size);
    if (size >= 180) {
      assert.equal(metadata.hasAlpha, false);
      const { data } = await image.raw().toBuffer({ resolveWithObject: true });
      assert.deepEqual([...data.subarray(0, 3)], [0x12, 0x34, 0x56]);
    }
  }
  const ico = bundle.get('favicon.ico');
  assert.equal(ico.readUInt16LE(0), 0);
  assert.equal(ico.readUInt16LE(2), 1);
  assert.equal(ico.readUInt16LE(4), 3);
  for (const [index, size] of [16, 32, 48].entries()) {
    const entry = 6 + index * 16;
    assert.equal(ico[entry], size);
    assert.equal(ico[entry + 1], size);
    const length = ico.readUInt32LE(entry + 8);
    const offset = ico.readUInt32LE(entry + 12);
    assert.ok(offset + length <= ico.length);
    const metadata = await sharp(ico.subarray(offset, offset + length)).metadata();
    assert.equal(metadata.format, 'png');
    assert.equal(metadata.width, size);
    assert.equal(metadata.height, size);
  }
});

test('invalid artwork and unknown locale fail before exporting inconsistent identity', async () => {
  assert.throws(() => faviconHead(svg, 'fr'), /Unsupported favicon locale/);
  assert.throws(() => faviconHead('<svg/>'), /colours/);
  await assert.rejects(buildFaviconBundle('<svg/>'), /colours/);
});
