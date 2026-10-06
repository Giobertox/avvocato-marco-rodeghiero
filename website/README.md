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
npm test
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
3. The prepared workflow uses the official `withastro/action` with `path: ./website`, Node 22, and `npm test && npm run build && npm run verify`. It runs only through `workflow_dispatch`; pushing files does not deploy.
4. Only when ready to publish, open **Actions → Deploy Astro to GitHub Pages → Run workflow**, select the default branch and run it. This step publishes the draft. No workflow has been run as part of local preparation.

The build remains static, with no server adapter required. Astro prefixes its generated CSS assets with `base`. `src/utils/paths.ts` prefixes page links and public assets; use `withBase('/images/example.jpg')` for any future files placed in `public/images/`. Imported assets should use their generated Astro URLs. SVG icons are inline. Source Serif 4 regular and Source Sans 3 regular/semibold are bundled from pinned Fontsource packages using Latin subsets and `font-display: swap`. Astro generates their base-aware asset URLs. Modern browsers download approximately 51 KB of WOFF2 fonts; WOFF fallbacks are also exported. Adobe's font licences are in `public/licenses/`.

`npm run verify` checks all generated internal links/assets and fragments against the configured base, all ten equivalent-page language switches, the root redirect, and CSS asset references. It also rejects localhost URLs in generated HTML/CSS. The static root redirect goes to `/avvocato-marco-rodeghiero/it/`; the generated `404.html` has base-aware recovery links.

Reference: [official Astro GitHub Pages deployment guide](https://docs.astro.build/en/guides/deploy/github/).

## Structure

- `src/data/site.ts`: contact details, route pairs, Italian/English copy, approved profile facts, and practice areas.
- `src/utils/paths.ts`: the base-aware helper for page and public-asset links.
- `config/seo.mjs` and `src/components/RobotsMeta.astro`: shared, build-time indexing policy.
- `lib/favicons.mjs` and `src/branding/favicon.svg`: shared favicon policy, export generation and canonical artwork.
- `config/sharing.mjs` and `src/components/SharingMeta.astro`: sharing image identity and localized preview metadata.
- `scripts/generate-favicons.mjs` and `scripts/generate-sharing-image.mjs`: adapters that write committed public artwork exports.
- `tests/favicons.test.mjs`: checks actual exported images, ICO frames and localized manifests.
- `src/layouts/Layout.astro`: page metadata, navigation, language switch, draft banner, and footer.
- `src/components/Brand.astro`: responsive display of the supplied logo, with a readable text identity on mobile.
- `src/components/SitePage.astro`: the five page types.
- `src/components/ContactBand.astro`: shared contact invitation.
- `src/components/ContactActions.astro`: consistent, labelled call/email buttons.
- `src/components/NewTabCue.astro`: visible arrow and localised screen-reader text for links that open a new tab.
- `src/components/Icon.astro` and `src/icons/`: local Lucide SVG icons, hidden from assistive technology where adjacent labels convey their meaning; license in `public/licenses/lucide.txt`.
- `src/styles/global.css`: responsive styling.
- `public/scripts/mobile-navigation.js`: optional Escape and focus-leave dismissal for the native mobile menu.
- `STAGING-REVIEW.md`: local-only source notes, assumptions, and remaining approval items; excluded from the public repository.

## Branding

`public/branding/studio-logo-blue.webp` is a byte-for-byte copy of the newly supplied `AvvMR Law Firm Logo Blue M.webp` (841 × 400 px). It is displayed as supplied, with no grayscale, contrast filter, recolouring or blend mode. The near-white header (`#fefefe`) matches the image's opaque background. The earlier monochrome CSS treatment has been removed. Original brand materials remain in the ignored root `branding/` folder; the earlier `public/branding/studio-logo.webp` is retained but no longer referenced by the website. The full blue logo appears on desktop. Mobile uses `public/branding/studio-mark-blue.webp`, a byte-for-byte copy of the supplied `AvvMR Law Firm Just Logo Blue M.webp` (372 x 150 px, approximately 3.7 KB), alongside readable HTML text. A responsive `<picture>` selects the appropriate source, so each viewport downloads only its matching logo. The tightly cropped mobile mark is displayed at 84 px wide, or 64 px on the narrowest phones, without cropping, recolouring or distortion. Both sources use base-aware URLs and declared intrinsic dimensions. The home link has the full practice name as its accessible label. No AI-generated logo or fictional portrait/office photograph is used.

Following the owner's refinement, the website palette uses blue `#00204c`, lighter cream `#fcfaf5`, near-black `#202428`, slate `#52616c` and white. The supplied logo's own colours are retained. Blue-grey surfaces group office details, active navigation and supporting content; contact invitations use blue with light text. Practice-area icons and jump links repeat related navy, steel-blue and slate-blue accents across both languages; labels and distinct icons identify each area independently of colour. Translations use a muted blue accent. Shared colour tokens also cover hover/pressed states, control borders, selection, status labels and inverse text; focus outlines use blue on light surfaces and light cream in the blue contact band. Existing font/button sizes, motion preferences and spacing remain in place.

The favicon is a simplified MR mark inspired by the brand, with light cream outlined serif letters on `#00204c` blue. Its canonical artwork is `src/branding/favicon.svg`, containing self-contained vector paths with no font dependency. Edit this source, then run `npm run icons`; `public/favicon.svg` is a generated export. `lib/favicons.mjs` owns colour extraction from that artwork, export sizes, localized names, cache version, head links, manifest construction and ICO encoding. Astro rendering and the CLI use this same module. Sharp loads only during export generation and adds no browser code. The supplied logo and existing favicon appearance are preserved.

`npm run icons` writes the SVG, ICO (16/32/48 px), browser PNGs (16/32 px), opaque Apple touch icon (180 px), phone icons (192/512 px), and two locale-specific manifests. These outputs are committed; normal builds do not regenerate them. Relative manifest paths preserve the GitHub Pages base and chosen language. Browser display mode adds no offline app or service worker. `Favicons.astro` prefixes the shared links across every page, including the root redirect and 404. The existing `mr3` URLs are retained. `npm test` exercises actual exported files with a different SVG palette, including PNG dimensions/backgrounds, decoded ICO frames, and manifest paths for both root and project hosting. Static verification independently checks the actual exported SVG, theme values, manifests and mobile icon references; it rejects stale artwork exports.

Link previews use `public/branding/studio-sharing-v1.png`, a 1200 x 630 PNG with the supplied blue logo centred on a near-white background. The artwork retains its colours and proportions and fits inside a centre-cropped square thumbnail. Regenerate it with `npm run sharing-image`. Sharing-image identity and localized descriptions live in `config/sharing.mjs`; its filename version is separate from favicon caching. `SharingMeta.astro` writes Open Graph and large-image card metadata directly into HTML, with absolute HTTPS URLs based on Astro's configured site/base and actual image dimensions/type. Each language keeps its page title and description. The bare project URL also declares a preview and the existing Italian destination, without relying on crawlers following its timed redirect. The 404 declares its public `/404.html` identity. `npm run verify` checks all twelve previews and decodes the referenced image. Messaging apps control final rendering and cache refresh; the website supplies the image and metadata without third-party scripts or messaging integrations.

When a WhatsApp preview omits the logo for one URL, compare its title with the current page's `og:title` and check the exact URL's initial HTML and image response before changing metadata. In the confirmed 6 October 2026 case, `/it/` showed the title from before sharing images were added, while the root and practice-area links showed the logo. The owner confirmed that `/it/?preview=logo-2` displayed the logo too, supporting the cached-preview diagnosis. A fresh query parameter is a diagnostic/workaround, not a guarantee that WhatsApp will refresh the original URL or existing messages. Ordinary navigation and `og:url` keep their clean paths; no permanent query parameter or cache-busting redirect is required. The website cannot clear WhatsApp's preview cache.

Icon link conventions follow [MDN's icon documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel#icon); the Apple touch icon and short home-screen title follow [Apple's Web Clip guidance](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html).

The homepage uses the supplied `public/branding/vicenza_BG.webp` (1400 × 500 px, approximately 90 KB) behind the existing content grid in both languages. A CSS grayscale filter and navy gradient keep the Basilica and clock tower recognisable while providing contrast for white text, supporting copy and light contact buttons. The image is decorative, uses the configured base path, declares intrinsic dimensions and receives high fetch priority; it adds no script or external request. Mobile cropping favours the architecture. The logo artwork and existing fonts remain unchanged.

The shared header is sticky on desktop and mobile, with an opaque near-white background, a subtle shadow, reduced spacing and a smaller displayed logo. On mobile viewports up to 999 px wide and 500 px high, the header scrolls with the page so the expanded menu cannot cover the content. The native mobile disclosure remains usable without JavaScript. A small deferred local script closes it on Escape, restoring focus to its summary when focus was inside, and when focus leaves the menu. The language switch is a labelled navigation landmark. Root scroll padding reserves space above fragment targets, including practice areas and contact details, and the fixed keyboard skip link appears above the header. Reduced-motion preferences remain supported; printing uses a static header and removes the hero photo treatment.

## Staging limitations

Indexing defaults to disabled in `config/seo.mjs`. Every HTML page, including the root redirect and 404, receives `noindex, nofollow`. The Pages workflow explicitly sets `SITE_INDEXING_ENABLED: 'false'`; a production build does not automatically enable indexing. `robots.txt` allows crawling so crawlers can read the meta tags. On project Pages, the file under the repository path is informational: crawlers use robots.txt at the host root. Indexing instructions are not access controls.

At the approved production-domain launch, update Astro's `site` and `base`, set the production build's `SITE_INDEXING_ENABLED` to `'true'`, and complete canonical/hreflang/sitemap metadata. The flag changes ordinary pages and the root redirect to `index, follow` and removes the draft banner; 404 always remains `noindex, nofollow`. Rebuild and run `npm run verify` with the same flag. Changing it after a build has no effect on the exported HTML. Keep the GitHub Pages working draft's flag false.

The root redirect is an HTML redirect in the static export, supported by GitHub Pages without server redirect rules. Final canonical URLs, hreflang, sitemap and verified structured data are deferred until the final domain and approved content exist.

All meetings are by appointment only, in person or remotely. Appointment requests use telephone/email and require direct confirmation by the practice. Email links open a draft; they do not book an appointment. No analytics, embedded map, third-party font requests, tracking code or contact form are included. These choices were reconfirmed on 6 October 2026.

Call/email buttons use the direct labels Chiamaci and Scrivici in Italian, and Call us and Write to us in English. The email button's accessible name retains the visible wording and identifies email as the contact method. The repeated email-app explanatory notes and their associated description references have been removed. Appointment links describe the email handoff and the practice's confirmation step. These are static instructions, with no simulated sending, loading or success state.

The translations page ends with a translation-specific invitation and an email-first action with the translation enquiry subject in both languages. Other pages retain the general contact invitation. Practice-area jump links use one column below 360 px, up to two columns on wider phones, and the existing sidebar layout on desktop. Enlarged text can also reduce them to one column. Header branding and language controls wrap into separate rows when needed without breaking the lawyer's name inside words; call/email buttons stack when enlarged labels need more space. The draft banner wraps naturally as text grows. The homepage hero states that meetings are by appointment only next to the language and meeting-format facts. Maps and LinkedIn links retain their secure new-tab behaviour, with a visible arrow, a localised tooltip and screen-reader text announcing the new tab.

Buttons have 160 ms colour/shadow transitions and a distinct 60 ms pressed state, with hover changes restricted to devices that support precise hovering. Focus outlines appear immediately. Reduced-motion preferences disable these transitions as well as smooth scrolling. Shared spacing tokens retain existing heading, paragraph and action gaps; the combined section padding between homepage services and editorial teasers is reduced from 72 to 48 px on mobile and from 96 to 64 px on wider screens.

Action text links use the bundled semibold weight and retain underlines. Service rows share category tint and title underlining for mouse hover and keyboard focus, with a 160 ms background transition. The open mobile-menu summary has a persistent blue-grey tint and a 48 px minimum height; current desktop navigation uses semibold navy text and an underline. Practice-area fragment targets highlight their heading with category tint and an outline, without changing its dimensions. Reduced-motion preferences also disable service-row and menu-chevron transitions.

Service rows, practice-area shortcuts and navigation/language links have distinct pressed feedback with 60 ms transitions. Navigation colour, border and inset-shadow changes use 160 ms transitions; hover treatments are restricted to precise pointers and preserve current-page indicators. Opening the native mobile menu fades in its links over 160 ms, with no delayed interaction or height animation. Closing remains immediate. Focus outlines are excluded from transitions, and reduced-motion preferences disable the added transitions and menu animation. These effects use CSS only and add no JavaScript or dependencies.

On document load, the main content fades in once over 320 ms using opacity only, without a delay, movement or layout changes. The header and footer do not animate. The fade stops immediately if a control inside main gains focus; reduced-motion preferences and printing disable it. Main has no persistent hidden state. This is an incoming-content animation, not a cross-document View Transition: ordinary full-page navigation, language switching, fragment links and browser history retain their native behavior. A page restored from the browser's back/forward cache may appear immediately rather than replaying the fade. The shared Layout covers both languages and the custom 404; the root redirect remains unchanged. See [MDN's reduced-motion guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

Body copy remains 17 px with 1.65 line height at the default browser font size. Buttons and navigation/action links use at least 16 px text, including on narrow phones; button targets remain at least 52 px high and navigation targets at least 44 px. Supporting notes use 15 px text with 1.6 line height; the mobile brand descriptor and draft banner use 14 px. Sizes use rem units so browser font preferences can scale the text.

The layout starts with mobile styles and expands at larger widths. The mobile menu uses native HTML disclosure, opens within the page, and works without JavaScript. Service rows use fine dividers, are full-width on phones, and use two columns on larger screens. Crisis/insolvency has its own group; contracts sit with civil law and debt recovery. Existing page URLs and practice-area fragments are preserved. Translations appear as a supplementary service. Contact and translation enquiry actions appear near the top of their pages.

The owner approved use of the supplied LinkedIn experience, education and language screenshots on 6 October 2026. The bilingual profile now includes a short biography, four education/training entries and four selected experience entries, with a simple external link to the supplied profile. Locally held review notes retain the full source history. Dates use the source's month/year values rather than calculated durations; March 2010 describes the start at the named practice, not admission to the Bar. The IUL – ISVGroup course is training and does not establish current register accreditation. Italian and English proficiency labels follow the screenshots; elementary Swedish/German are recorded in the review notes without expanding the working-language offering. No unprovided portrait or professor title is added.

Before a public launch, complete the professional registration and applicable notices, approve Italian and English copy, confirm every provisional profile detail, and update the staging/indexing settings together.
