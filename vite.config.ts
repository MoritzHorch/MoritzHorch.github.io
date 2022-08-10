/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
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
      exclude: [...configDefaults.coverage.exclude, 'src/main.ts'],
      reporter: ['text', 'lcov'],
      lines: 95,
      statements: 95,
      functions: 95,
      branches: 95
    }
  }
});
