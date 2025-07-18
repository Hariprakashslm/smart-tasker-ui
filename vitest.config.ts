import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@core': path.resolve(__dirname, './src/packages/core/components'),
      '@auth': path.resolve(__dirname, './src/packages/auth/components'),
      '@layout': path.resolve(__dirname, './src/packages/layout/components'),
      '@dashboard': path.resolve(__dirname, './src/packages/dashboard/components'),
      '@projects': path.resolve(__dirname, './src/packages/projects/components'),
      '@boards': path.resolve(__dirname, './src/packages/boards/components'),
      '@tasks': path.resolve(__dirname, './src/packages/tasks/components'),
      '@files': path.resolve(__dirname, './src/packages/files/components'),
      '@notifications': path.resolve(__dirname, './src/packages/notifications/components'),
      '@activity': path.resolve(__dirname, './src/packages/activity/components'),
      '@search': path.resolve(__dirname, './src/packages/search/components'),
      '@collaboration': path.resolve(__dirname, './src/packages/collaboration/components'),
      '@admin': path.resolve(__dirname, './src/packages/admin/components'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
}); 