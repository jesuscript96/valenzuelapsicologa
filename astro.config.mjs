// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set the final domain here once it exists (enables canonical URLs).
  // site: 'https://www.ejemplo.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
