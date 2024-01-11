import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

const config = defineConfig({
  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: ['vue-demi'],
  },
  
  build: {
    minify: true,
  },

  server: {
    host: '0.0.0.0',
    port: 9027,
  },
});

export default config;
