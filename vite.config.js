import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This matches your GitHub repository name
  base: "https://github.com/Bala-ramesh/React_web.git",
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})