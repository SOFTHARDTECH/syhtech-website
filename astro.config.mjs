import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://syhtech.com.ar',
  vite: {
    plugins: [tailwindcss()],
  },
});
