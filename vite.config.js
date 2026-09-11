import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // The app is served from a subdirectory on GitHub Pages, matching the
  // "homepage" field in package.json. This is what CRA derived from it.
  base: '/react-example-pages/',
  test: {
    // App.test.jsx renders into a real DOM node, so it needs a DOM.
    environment: 'jsdom',
    // Keeps `it(...)` usable without importing it, the way Jest allowed.
    globals: true,
  },
});
