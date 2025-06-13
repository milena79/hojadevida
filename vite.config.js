import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


import { defineConfig } from 'vite';

export default defineConfig({
  base: '//HojaDeVida-main',  // Asegúrate de que esta ruta sea la correcta para tu despliegue
  build: {
    outDir: 'dist',  // Esto debería coincidir con la carpeta en Netlify
    target: 'esnext', // Especifica el objetivo de construcción para los navegadores modernos
    modulePreload: true,
  },
});
