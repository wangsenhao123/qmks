import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // const env = loadEnv(mode, process.cwd())
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://serverqn.9yuecloud.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
        // rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '')
      }
    }
  }
})
