import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // GitHub Pages'de projenizin yükleneceği alt dizin
  plugins: [react()],
});
