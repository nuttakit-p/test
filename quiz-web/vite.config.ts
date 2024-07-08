import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/bdms-test/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  publicDir: 'public',
});
