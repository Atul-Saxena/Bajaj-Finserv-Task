import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/bfhl': 'https://bajajfinserv-project-backend.vercel.app',
    },
  },
  plugins: [react()],
})
