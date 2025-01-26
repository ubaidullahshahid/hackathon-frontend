import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Manual chunks to separate dependencies into smaller bundles
        manualChunks: {
          vendor: ['react', 'react-dom'], // React aur React DOM ko alag chunk mein rakhna
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Chunk size limit ko 1000 kB tak adjust kar diya
  },
});