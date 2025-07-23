import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5173,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'], // ✅ this includes your components
      exclude: [
        '**/*.d.ts',
        '**/*.test.{ts,tsx}',
        '**/setupTests.ts',
        '**/jest.config.*',
        '**/*.cy.*',
        '**/*.js', // ✅ exclude JS since you're using TS
        '**/*.mjs',
        'cypress/',
        'node_modules/',
      ],
    },
  },
});
