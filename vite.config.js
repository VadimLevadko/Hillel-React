import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss()
  ],
  resolve: {
      alias: {
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@features': path.resolve(__dirname, 'src/features'),
          '@components': path.resolve(__dirname, 'src/app/components'),
        },
    },
})
