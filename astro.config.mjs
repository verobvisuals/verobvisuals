import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// If your web address changes (for example a custom domain later), update it here.
export default defineConfig({
  site: 'https://verobvisuals.pages.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  image: {
    responsiveStyles: false,
  },
});
