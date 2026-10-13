import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tdn/', //  this is the fix
  plugins: [react()],
});