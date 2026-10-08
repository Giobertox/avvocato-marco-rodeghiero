# Next-session handoff — 8 October 2026

## Current release

- Live [Italian website](https://giobertox.github.io/avvocato-marco-rodeghiero/it/) and [English website](https://giobertox.github.io/avvocato-marco-rodeghiero/en/).
- Dedicated [Italian privacy notice](https://giobertox.github.io/avvocato-marco-rodeghiero/it/privacy/) and [English privacy notice](https://giobertox.github.io/avvocato-marco-rodeghiero/en/privacy/), linked from Contact and every footer; equivalent-language switching is preserved.
- Latest deployed application commit: `e2eebcb0a1c878095e50cfaff7c7f5f23e792c9c`. [Deployment 37824473652](https://github.com/Giobertox/avvocato-marco-rodeghiero/actions/runs/37824473652) succeeded after explicit owner approval. Later documentation-only commits do not change this deployed application.
- The review banner, visible unresolved TBC notes and `noindex, nofollow` remain. The latest approval covered publishing this draft, not removing unresolved notes or enabling search indexing.
- Static Astro site, locally served fonts/images and one mobile-navigation script. No contact form, analytics, advertising pixels, embedded maps/social widgets or cookie banner. Maps/LinkedIn open as external links. Reassess cookie consent before changing hosting or introducing third-party tracking/embeds.
- Personal data controller confirmed by the owner: Avv. Marco Rodeghiero. Other processing arrangements remain unconfirmed; see [PRIVACY-REVIEW.md](./PRIVACY-REVIEW.md).

## Remaining decisions, in priority order

1. Confirm current professional registration and applicable fiscal details, including VAT where relevant, to replace the professional-information TBC text. March 2010 is the start at the practice, not a verified Bar admission date.
2. Complete the privacy facts: actual enquiry purposes/legal bases; who accesses enquiries; providers and roles; retention criteria/periods; actual international transfers and safeguards; DPO status if applicable; any solely automated significant decisions beyond this website. Do not invent these or remove TBC solely because the draft was approved.
3. Confirm the proposed translation-document examples currently marked TBC. The approved service is Italian/English legal translation; no certification, sworn-translation or accreditation claim has been established.
4. Agree the final domain/hosting, maintenance owner and definitive launch. Domain-dependent canonical/hreflang/sitemap work and enabling indexing belong to that launch. Preserve the Pages base path and disabled indexing in the meantime.

The owner approved the current Italian/English presentation and its publication on 8 October 2026. That approval does not verify the remaining factual details. No additional implementation task is pending.

## Start work

Read this file, `README.md`, `PRIVACY-REVIEW.md`, the current diff/status and any repository instructions before changing code. Local-only `../MARCO-OPEN-QUESTIONS.md` tracks the production questionnaire; `STAGING-REVIEW.md` preserves source/release history. Their latest dated updates supersede historical entries. Original branding, ZIP exports and ignored review evidence are retained locally; old ZIP exports are not the deployment source.

Core files: `src/data/site.ts` contains bilingual copy/routes/privacy facts; `src/components/SitePage.astro` renders pages; `src/layouts/Layout.astro` owns navigation/footer; `src/styles/global.css` contains styling. `config/seo.mjs` and `.github/workflows/deploy.yml` govern indexing. `astro.config.mjs` sets the Pages host/base.

Run from the `website/` directory using the Node 22 version described in the README:

```powershell
cd E:\MyProjects\AvvMarco\website
npm ci
$env:ASTRO_TELEMETRY_DISABLED='1'
$env:SITE_INDEXING_ENABLED='false'
npm test
npm run build
npm run verify
npm run preview
```

Preview URL: `http://127.0.0.1:4321/avvocato-marco-rodeghiero/it/`. The temporary preview server from this session has been stopped; start a new one when needed.

## Validation and publishing

The application release passed both existing favicon tests, a 14-page static build and verification of 473 local references, 12 language switches, 14 sharing previews and zero external scripts. Privacy pages were checked in both languages at 320, 390, 768 and 1440 px, including contents anchors and language switching. Live home/privacy checks at 390 px passed after deployment, with no cookies/browser storage observed. These are scoped checks, not a complete accessibility or GDPR compliance certification.

For an explicitly approved website publication, run from the repository root after reviewing/staging only the relevant files and committing:

```powershell
git push origin main
gh workflow run deploy.yml --ref main
gh run list --workflow deploy.yml --limit 3
gh run watch <run-id> --exit-status
```

Push does not auto-deploy. Verify the run SHA matches the intended commit, both jobs succeed and changed pages/assets work live. Documentation-only closeout changes need a commit/push, not another site deployment. Keep local source/review materials, credentials and generated captures out of commits.
