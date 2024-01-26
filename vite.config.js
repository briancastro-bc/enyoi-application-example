import path from 'path';
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
    proxy: {
      '/api': {
        target: 'https://rickandmortyapi.com/api',
        changeOrigin: true,
        rewrite: (url) => url.replace(/^\/api/, ''),
      }
    }
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    }
  }
})
