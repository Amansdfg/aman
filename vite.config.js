import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/aman/',  // Ensure this matches your deployment base path
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
});
