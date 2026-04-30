import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // serve from repo path for GitHub Pages
  base: '/abide-assembly/',
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild',
    reportCompressedSize: false,
  },
}))
