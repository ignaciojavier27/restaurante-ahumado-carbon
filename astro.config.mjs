// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Dominio base del sitio (reemplazar con el dominio real cuando esté disponible)
  site: 'https://ahumadoycarbon.cl',

  integrations: [
    sitemap({
      // Excluir páginas legales del sitemap (ya tienen noindex)
      filter: (page) =>
        !page.includes('/terminos-y-condiciones') &&
        !page.includes('/politicas-de-privacidad'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: [
          "**/dist/**",
          "**/.git/**",
          "**/uploads/**",
          "**/public/videos/**"
        ]
      }
    }
  },

  adapter: cloudflare()
});