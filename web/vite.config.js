import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // serve from root for both dev and production (custom domain)
  base: '/',
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild',
    reportCompressedSize: false,
  },
}))
