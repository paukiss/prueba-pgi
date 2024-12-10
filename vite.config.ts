import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Asegúrate de que el directorio de salida sea 'build'
  },
  base: '/events/', // Cambia esto para que coincida con el subdirectorio
});
