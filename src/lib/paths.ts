// Prefix an internal path with Astro's configured base URL so links work both
// under a subpath deploy (GitHub Pages project site) and at the domain root.
// Reads import.meta.env.BASE_URL, so changing `base` in astro.config updates
// every link with no further edits.
export const withBase = (path = ''): string => {
  const base = import.meta.env.BASE_URL; // "/valleybridge/" on Pages, "/" at root
  return (base + String(path).replace(/^\//, '')).replace(/([^:]\/)\/+/g, '$1');
};
