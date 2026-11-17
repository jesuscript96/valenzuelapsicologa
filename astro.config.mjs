// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Final domain (enables canonical URLs).
  site: 'https://www.valenzuelapsicologa.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
