/* eslint-disable no-undef */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Hibrizy-Web/",
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      find: '../font',
      replacement: path.resolve(__dirname, 'resources/css/fontello/font'),
    }
  }
})
