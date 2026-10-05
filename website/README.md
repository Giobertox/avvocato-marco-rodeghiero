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

The build remains static, with no server adapter required. Astro prefixes its generated CSS assets with `base`. `src/utils/paths.ts` prefixes page links and public assets; use `withBase('/images/example.jpg')` for any future files placed in `public/images/`. Imported assets should use their generated Astro URLs. The current SVG icons are inline and fonts are installed system fonts, so neither requires separate network assets.

`npm run verify` checks all generated internal links/assets and fragments against the configured base, all ten equivalent-page language switches, the root redirect, and CSS asset references. It also rejects localhost URLs in generated HTML/CSS. The static root redirect goes to `/avvocato-marco-rodeghiero/it/`; the generated `404.html` has base-aware recovery links.

Reference: [official Astro GitHub Pages deployment guide](https://docs.astro.build/en/guides/deploy/github/).

## Structure

- `src/data/site.ts`: contact details, route pairs, Italian/English copy, and practice areas.
- `src/utils/paths.ts`: the base-aware helper for page and public-asset links.
- `src/layouts/Layout.astro`: page metadata, navigation, language switch, draft banner, and footer.
- `src/components/SitePage.astro`: the five page types.
- `src/components/ContactBand.astro`: shared contact invitation.
- `src/components/ContactActions.astro`: consistent, labelled call/email buttons.
- `src/components/Icon.astro` and `src/icons/`: local Lucide SVG icons, hidden from assistive technology where adjacent labels convey their meaning; license in `public/licenses/lucide.txt`.
- `src/styles/global.css`: responsive styling.
- `STAGING-REVIEW.md`: local-only source notes, assumptions, and remaining approval items; excluded from the public repository.

## Staging limitations

Every content page has `noindex, nofollow`; `robots.txt` disallows crawling. These are indexing instructions, not access controls. Use private hosting or host-level password protection if restricting access to a deployed staging copy.

The root redirect is an HTML redirect in the static export, supported by GitHub Pages without server redirect rules. Final canonical URLs, hreflang, sitemap and verified structured data are deferred until the final domain and approved content exist.

Appointment requests open an email draft; they do not book an appointment. Telephone/email actions are real contact links. No analytics, embedded map, external fonts, tracking code or contact form are included.

The layout starts with mobile styles and expands at larger widths. The mobile menu uses native HTML disclosure, opens within the page, and works without JavaScript. Service rows are full-width on phones and use two columns on larger screens. Contact and translation enquiry actions appear near the top of their pages.

Before a public launch, complete the professional registration and applicable notices, approve Italian and English copy, confirm every provisional profile detail, and update the staging/indexing settings together.
