/** Resolve a /public asset against the configured base (/rafail-nn/ on GitHub Pages). */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
