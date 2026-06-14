import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Dev server runs at "/" so http://localhost:5173/ opens directly.
// Production build is served from /rafail-nn/ on GitHub Pages.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/rafail-nn/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
