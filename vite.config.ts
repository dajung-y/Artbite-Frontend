import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.sparki-today.com',
        changeOrigin: true,
      },
      '/oauth2/authorization': {
        target: 'https://api.sparki-today.com',
        changeOrigin: true,
      }
    }
  }
})
