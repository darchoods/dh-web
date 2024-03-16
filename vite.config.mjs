import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

const config = defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isDev = env.APP_ENV?.toLowerCase() === 'development';
  return {
    __VUE_PROD_DEVTOOLS__: isDev,
    plugins: [
      vue(),
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    
    build: {
      //minify: true,
    },

    server: {
      host: '0.0.0.0',
      port: 8081,
    },
  };
});

export default config;
