// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './jest.setup.ts',
//     coverage: {
//       reporter: ['text', 'json', 'html'],
//       include: ['src/**/*.{ts,tsx}'],
//       exclude: [
//         '**/*.test.{ts,tsx}',
//         '**/*.spec.{ts,tsx}',
//         'src/test-utils.tsx',
//         'src/mocks/**',
//         '**/jest.setup.ts',
//         '**/vite.config.ts',
//         '**/jest.config.ts',
//         '**/eslint.config.js',
//         '**/cypress/**',
//         '**/.eslintrc.cjs',
//         '/node_modules/',
//     '\\.d\\.ts$',          
//     'src/types/',          
//     'test-utils.tsx',
//     "src/main.tsx",  
//       ]
//     }
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// });
// vite.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            reportsDirectory: './coverage',
            exclude: [
                '**/node_modules/**',
                '**/dist/**',
                '**/coverage/**',
                '**/*.d.ts',
                'src/setupTests.ts',
            ],
        },
    },
});
