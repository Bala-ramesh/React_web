import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This matches your GitHub repository name
  base: "/React_web/",
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})