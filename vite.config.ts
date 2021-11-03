import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@styles': path.resolve('./src/styles'),
      '@features': path.resolve('./src/features'),
      '@store': path.resolve('./src/store/index.ts'),
      '@utils': path.resolve('./src/utils.tsx'),
    },
  },
});
