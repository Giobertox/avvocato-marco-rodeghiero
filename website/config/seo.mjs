// Indexing is opt-in. Astro production builds are also used for public drafts.
export const indexingEnabled = process.env.SITE_INDEXING_ENABLED === 'true';

export function robotsContent(forceNoIndex = false) {
  return indexingEnabled && !forceNoIndex ? 'index, follow' : 'noindex, nofollow';
}
