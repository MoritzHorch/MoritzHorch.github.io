/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      hot: !process.env.VITEST
    })
  ],
  test: {
    setupFiles: ['test/setupTests.ts'],
    globals: true,
    environment: 'jsdom',
    coverage: {
      all: true,
      include: ['src/**'],
      exclude: ['src/main.ts', 'src/**/*.d.ts'],
      reporter: ['text', 'lcov']
    }
  }
});
