# Studio Legale Avv. Marco Rodeghiero — staging draft

A review version of the bilingual website, built with Astro and static HTML. Discovery and staging-review documents are kept locally and excluded from the public repository.

## Run locally

Requires Node.js 22.12 or later in the Node 22 release line (the current build was checked with Node 22.23.2).

```powershell
npm ci
$env:ASTRO_TELEMETRY_DISABLED='1'
npm run dev
```

Open the local address printed by Astro, followed by `/avvocato-marco-rodeghiero/it/` or `/avvocato-marco-rodeghiero/en/`. Development and production previews use the same base path.

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'
npm run build
npm run verify
npm run preview
```

The generated site is in `dist/`. Deploy that directory to a static staging host; no server application, database or account system is required. The preview server listens only on the local computer. Another person cannot access the local URL from their computer.

## GitHub Pages preparation

The repository root is the parent of `website/`. Keep that structure when uploading to GitHub: `.github/workflows/deploy.yml` belongs at the repository root, and the Astro app and its existing `package-lock.json` belong in `website/`.

The configured repository is `Giobertox/avvocato-marco-rodeghiero`. Its GitHub Pages URL is `https://Giobertox.github.io/avvocato-marco-rodeghiero/`, with Italian and English entry points at `it/` and `en/` below that path.

To enable Pages when ready:

1. Create a GitHub repository named `avvocato-marco-rodeghiero` and upload the project structure described above to its default branch, normally `main`. Include `website/package-lock.json`; exclude `node_modules/`, `dist/`, `.astro/`, local environment files and the presentation ZIP.
2. Open the repository's **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. The prepared workflow uses the official `withastro/action` with `path: ./website`, Node 22, and `npm run build && npm run verify`. It runs only through `workflow_dispatch`; pushing files does not deploy.
4. Only when ready to publish, open **Actions → Deploy Astro to GitHub Pages → Run workflow**, select the default branch and run it. This step publishes the draft. No workflow has been run as part of local preparation.

The build remains static, with no server adapter required. Astro prefixes its generated CSS assets with `base`. `src/utils/paths.ts` prefixes page links and public assets; use `withBase('/images/example.jpg')` for any future files placed in `public/images/`. Imported assets should use their generated Astro URLs. SVG icons are inline. Source Serif 4 regular and Source Sans 3 regular/semibold are bundled from pinned Fontsource packages using Latin subsets and `font-display: swap`. Astro generates their base-aware asset URLs. Modern browsers download approximately 51 KB of WOFF2 fonts; WOFF fallbacks are also exported. Adobe's font licences are in `public/licenses/`.

`npm run verify` checks all generated internal links/assets and fragments against the configured base, all ten equivalent-page language switches, the root redirect, and CSS asset references. It also rejects localhost URLs in generated HTML/CSS. The static root redirect goes to `/avvocato-marco-rodeghiero/it/`; the generated `404.html` has base-aware recovery links.

Reference: [official Astro GitHub Pages deployment guide](https://docs.astro.build/en/guides/deploy/github/).

## Structure

- `src/data/site.ts`: contact details, route pairs, Italian/English copy, and practice areas.
- `src/utils/paths.ts`: the base-aware helper for page and public-asset links.
- `config/seo.mjs` and `src/components/RobotsMeta.astro`: shared, build-time indexing policy.
- `src/layouts/Layout.astro`: page metadata, navigation, language switch, draft banner, and footer.
- `src/components/Brand.astro`: responsive display of the supplied logo, with a readable text identity on mobile.
- `src/components/SitePage.astro`: the five page types.
- `src/components/ContactBand.astro`: shared contact invitation.
- `src/components/ContactActions.astro`: consistent, labelled call/email buttons.
- `src/components/Icon.astro` and `src/icons/`: local Lucide SVG icons, hidden from assistive technology where adjacent labels convey their meaning; license in `public/licenses/lucide.txt`.
- `src/styles/global.css`: responsive styling.
- `STAGING-REVIEW.md`: local-only source notes, assumptions, and remaining approval items; excluded from the public repository.

## Branding

`public/branding/studio-logo.webp` is an unchanged copy of the supplied horizontal logo (`AvvMR Law Firm Logo Colours.webp`). Original brand materials remain in the ignored root `branding/` folder. The full logo appears on desktop; mobile presents its monogram through a CSS viewport alongside readable HTML text. Both use the same local image and a base-aware URL, with no additional image download for the alternate display. The home link has the full practice name as its accessible label. No AI-generated logo or fictional portrait/office photograph is used.

The provisional palette uses burgundy `#6a0d0f`, charcoal `#2c2926`, warm grey `#6b5f56`, and ivory `#faf8f3`, pending an official colour specification. The header background matches the supplied image's near-white background. Practice-area icons and jump links repeat restrained burgundy, ochre, sage and plum accents across both languages; labels and icons identify each area independently of colour. Translations use a sage accent, office information a warm neutral panel, and contact invitations burgundy. The favicon remains a simple, readable R initial in the brand colours until a dedicated small-format brand asset is available.

## Staging limitations

Indexing defaults to disabled in `config/seo.mjs`. Every HTML page, including the root redirect and 404, receives `noindex, nofollow`. The Pages workflow explicitly sets `SITE_INDEXING_ENABLED: 'false'`; a production build does not automatically enable indexing. `robots.txt` allows crawling so crawlers can read the meta tags. On project Pages, the file under the repository path is informational: crawlers use robots.txt at the host root. Indexing instructions are not access controls.

At the approved production-domain launch, update Astro's `site` and `base`, set the production build's `SITE_INDEXING_ENABLED` to `'true'`, and complete canonical/hreflang/sitemap metadata. The flag changes ordinary pages and the root redirect to `index, follow` and removes the draft banner; 404 always remains `noindex, nofollow`. Rebuild and run `npm run verify` with the same flag. Changing it after a build has no effect on the exported HTML. Keep the GitHub Pages working draft's flag false.

The root redirect is an HTML redirect in the static export, supported by GitHub Pages without server redirect rules. Final canonical URLs, hreflang, sitemap and verified structured data are deferred until the final domain and approved content exist.

Appointment requests open an email draft; they do not book an appointment. Telephone/email actions are real contact links. No analytics, embedded map, third-party font requests, tracking code or contact form are included.

The layout starts with mobile styles and expands at larger widths. The mobile menu uses native HTML disclosure, opens within the page, and works without JavaScript. Service rows use fine dividers, are full-width on phones, and use two columns on larger screens. Crisis/insolvency has its own group; contracts sit with civil law and debt recovery. Existing page URLs and practice-area fragments are preserved. Translations appear as a supplementary service. Profile qualifications, education dates, roles and portraits awaiting confirmation are omitted from rendered pages; the research remains in local review notes. Contact and translation enquiry actions appear near the top of their pages.

Before a public launch, complete the professional registration and applicable notices, approve Italian and English copy, confirm every provisional profile detail, and update the staging/indexing settings together.
