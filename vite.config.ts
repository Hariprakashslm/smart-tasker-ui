import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
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
      core: path.resolve(__dirname, 'src/packages/core'),
      page: path.resolve(__dirname, 'src/packages/page'),
      auth: path.resolve(__dirname, 'src/packages/auth'),
      layout: path.resolve(__dirname, 'src/packages/layout'),
      dashboard: path.resolve(__dirname, 'src/packages/dashboard'),
      projects: path.resolve(__dirname, 'src/packages/projects'),
      boards: path.resolve(__dirname, 'src/packages/boards'),
      tasks: path.resolve(__dirname, 'src/packages/tasks'),
      uploads: path.resolve(__dirname, 'src/packages/uploads'),
      notifications: path.resolve(__dirname, 'src/packages/notifications'),
      activity: path.resolve(__dirname, 'src/packages/activity'),
      search: path.resolve(__dirname, 'src/packages/search'),
      collaboration: path.resolve(__dirname, 'src/packages/collaboration'),
      admin: path.resolve(__dirname, 'src/packages/admin'),
    },
  },
});
