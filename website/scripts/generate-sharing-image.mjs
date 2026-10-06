import sharp from 'sharp';
import { sharingImage } from '../config/sharing.mjs';

// Export the supplied artwork, unchanged in colour and proportions, as a PNG card.
// A centred 600 px logo also fits inside a centre-cropped square thumbnail.
const logo = await sharp('public/branding/studio-logo-blue.webp')
  .resize({ width: 600, withoutEnlargement: true }).png().toBuffer();
await sharp({
  create: { width: sharingImage.width, height: sharingImage.height, channels: 3, background: '#fefefe' },
}).composite([{ input: logo, gravity: 'centre' }])
  .png({ compressionLevel: 9 }).toFile(`public${sharingImage.path}`);
console.log(`Generated ${sharingImage.width} x ${sharingImage.height} logo sharing card.`);
