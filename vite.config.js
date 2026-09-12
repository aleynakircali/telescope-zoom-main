// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        computation: resolve(process.cwd(), 'computation.html'),
      },
    },
  },
});
