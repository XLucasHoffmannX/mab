// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  compressHTML: true,
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 500,
    }
  },
  adapter: vercel()
});