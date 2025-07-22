import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
 
test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
   coverage: {
    provider: 'v8',
    reporter: ['text', 'html'],
    reportsDirectory: './coverage',
   include: ['src/pages/**/*.{ts,tsx}'],
    exclude: [
      '**/*.d.ts',
      '**/*.test.tsx',
      '**/*.test.ts',
      '**/setupTests.ts',
      '**/vite.config.*',
      '**/jest.config.*',
      '**/eslint.config.*',
      '**/cypress/**',
      '**/*.cy.ts',
      '**/*.cy.js',
      '**/*.js',         // Exclude all .js files
      '**/*.mjs',        // Exclude all .mjs files
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
    ],
  },
  }
});
