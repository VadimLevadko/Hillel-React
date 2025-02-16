import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, 'src/public'),
      '@commonSections': path.resolve(__dirname, 'src/src/app/components/commonSections'),
      '@utils': path.resolve(__dirname, 'src/src/utils'),
    },
  },
})
