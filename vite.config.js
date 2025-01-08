import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4173,  // Usar el puerto de Render, o 4173 por defecto en desarrollo
    host: true  // Hacer accesible en la red
  }
})

