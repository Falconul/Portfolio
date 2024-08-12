import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio/', // GitHub Pages için proje yolu
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.jsx' // Giriş dosyanızın yolu
      }
    }
  }
});
