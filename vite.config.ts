import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'
import path from 'path'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.sparki-today.com',
        changeOrigin: true,
      },
      '/oauth2/authorization': {
        target: 'http://api.sparki-today.com',
        changeOrigin: true,
      }
    }
  },
  define: {
    'import.meta.env.VITE_TOSS_CLIENT_KEY': JSON.stringify('test_ck_0RnYX2w532qqJXg2lpXl8NeyqApQ')
  }
})
