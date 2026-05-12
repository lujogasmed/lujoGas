import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lujogas.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [],
      serialize(item) {
        // Prioridades por tipo de página
        if (item.url === 'https://lujogas.com/') return { ...item, changefreq: 'weekly',  priority: 1.0 };
        if (item.url.includes('/servicios'))     return { ...item, changefreq: 'monthly', priority: 0.9 };
        if (item.url.includes('/instalacion-gas-medellin'))   return { ...item, priority: 0.95 };
        if (item.url.includes('/certificacion-gas-medellin')) return { ...item, priority: 0.90 };
        if (item.url.includes('/mantenimiento-gas-medellin')) return { ...item, priority: 0.88 };
        if (item.url.includes('/instalacion-gas-'))           return { ...item, priority: 0.80 };
        if (item.url.includes('/nosotros'))      return { ...item, changefreq: 'monthly', priority: 0.7 };
        return item;
      },
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
