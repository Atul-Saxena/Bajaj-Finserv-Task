import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/bfhl': 'https://bajaj-backend-kappa-blue.vercel.app',
    },
  },
  plugins: [react()],
})
