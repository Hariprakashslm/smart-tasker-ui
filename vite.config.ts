import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({
      entryRoot: path.resolve(__dirname, 'src/packages'),
      outputDir: path.resolve(__dirname, 'dist/types'),
      skipDiagnostics: false,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/packages/index.ts'),
      name: 'SmartTaskerUI',
      fileName: (format) => `smart-tasker-ui.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, 'src/packages/core/components'),
      '@page': path.resolve(__dirname, 'src/packages/page/components'),
      '@auth': path.resolve(__dirname, 'src/packages/auth/components'),
      '@layout': path.resolve(__dirname, 'src/packages/layout/components'),
      '@dashboard': path.resolve(
        __dirname,
        'src/packages/dashboard/components'
      ),
      '@projects': path.resolve(__dirname, 'src/packages/projects/components'),
      '@boards': path.resolve(__dirname, 'src/packages/boards/components'),
      '@tasks': path.resolve(__dirname, 'src/packages/tasks/components'),
      '@files': path.resolve(__dirname, 'src/packages/files/components'),
      '@notifications': path.resolve(
        __dirname,
        'src/packages/notifications/components'
      ),
      '@activity': path.resolve(__dirname, 'src/packages/activity/components'),
      '@search': path.resolve(__dirname, 'src/packages/search/components'),
      '@collaboration': path.resolve(
        __dirname,
        'src/packages/collaboration/components'
      ),
      '@admin': path.resolve(__dirname, 'src/packages/admin/components'),
      '@screens/dashboard': path.resolve(
        __dirname,
        'src/packages/dashboard/screens'
      ),
      '@screens/projects': path.resolve(
        __dirname,
        'src/packages/projects/screens'
      ),
      '@screens/boards': path.resolve(__dirname, 'src/packages/boards/screens'),
      '@screens/tasks': path.resolve(__dirname, 'src/packages/tasks/screens'),
      '@screens/admin': path.resolve(__dirname, 'src/packages/admin/screens'),
      '@screens/common': path.resolve(__dirname, 'src/packages/common/screens'),
      '@screens/notifications': path.resolve(
        __dirname,
        'src/packages/notifications/screens'
      ),
      '@screens/files': path.resolve(__dirname, 'src/packages/files/screens'),
      '@screens/search': path.resolve(__dirname, 'src/packages/search/screens'),
      '@screens/auth': path.resolve(__dirname, 'src/packages/auth/screens'),
    },
  },
});
