// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Swap these two lines for
  //   site: 'https://yongstutoring.co.uk'
  // (and drop `base`) once a custom domain is attached.
  site: 'https://yw4111.github.io',
  base: '/yongstutoring',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
