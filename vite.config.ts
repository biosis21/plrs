import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import styleX from 'vite-plugin-stylex';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/plrs/',
  plugins: [react(), styleX(), TanStackRouterVite()],
});
