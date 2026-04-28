import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap'; // TODO: re-enable when sitemap v3 bug is resolved

export default defineConfig({
  site: 'https://lujogas.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    // sitemap(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
