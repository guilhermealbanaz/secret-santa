import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/secret-santa/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'firebase': ['firebase/app', 'firebase/firestore'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            './src/presentation/components/ui/button',
            './src/presentation/components/ui/card',
            './src/presentation/components/ui/input',
            './src/presentation/components/ui/alert'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
}) 