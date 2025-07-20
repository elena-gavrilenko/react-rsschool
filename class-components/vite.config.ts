import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.ts', '**/*.test.tsx'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-utils/setupTests.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/**/*.test.{js,jsx,ts,tsx}',
        'src/**/*.spec.{js,jsx,ts,tsx}',
        'src/index.{js,jsx,ts,tsx}',
        'src/**/*.constants.{ts}',
        'src/components/errorBoundary/errorBoundary.tsx',
        'src/types/types.ts',
        'src/utils/utils.ts',
        'src/setupTests.{js,ts}',
        'src/**/*.d.ts',
      ],
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 50,
        functions: 50,
        branches: 50,
        statements: 80,
      },
    },
  },
});
