import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// Fechas reales de última modificación por URL (generadas por scripts/gen-lastmod.mjs
// en el prebuild). Un lastmod igual para todas las URLs en cada deploy hace que Google
// lo descarte como señal; con fechas reales recupera la priorización de rastreo.
const lastmodMap = JSON.parse(readFileSync(new URL('./src/data/lastmod.json', import.meta.url), 'utf8'));

export default defineConfig({
  site: 'https://lujogas.com.co',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      customPages: [],
      serialize(item) {
        const lastmod = lastmodMap[item.url] ?? lastmodMap[item.url.replace(/\/$/, '')];
        if (lastmod) item = { ...item, lastmod };

        // Prioridades por tipo de página
        if (item.url === 'https://lujogas.com.co/') return { ...item, changefreq: 'weekly',  priority: 1.0 };
        if (item.url.includes('/servicios'))     return { ...item, changefreq: 'monthly', priority: 0.9 };
        if (item.url.includes('/instalacion-gas-medellin'))   return { ...item, priority: 0.95 };
        if (item.url.includes('/certificacion-gas-medellin')) return { ...item, priority: 0.90 };
        if (item.url.includes('/mantenimiento-gas-medellin')) return { ...item, priority: 0.88 };
        if (item.url.includes('/instalacion-gas-'))           return { ...item, priority: 0.80 };
        if (item.url.includes('/rpo-gas-medellin'))           return { ...item, priority: 0.90 };
        if (item.url.includes('/rpo-gas-'))                   return { ...item, priority: 0.75 };
        if (item.url.match(/\/blog\/?$/))                     return { ...item, changefreq: 'weekly', priority: 0.85 };
        if (item.url.includes('/blog/'))                      return { ...item, changefreq: 'monthly', priority: 0.80 };
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
