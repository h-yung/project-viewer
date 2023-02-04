

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import * as dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), react()],
  //esbuild: {
    // drop:["console"], //https://esbuild.github.io/api/#drop
  // },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_APP_SERVER,
        changeOrigin:true,
        secure:false,
        ws: true,
        rewrite: (path)=> path.replace(/^\/api/,"")
      }
    }
  }
});
