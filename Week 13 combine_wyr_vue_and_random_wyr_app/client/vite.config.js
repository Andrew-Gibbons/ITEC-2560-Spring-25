import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
        // requests to http://localhost:3000/wyr will be proxied to http://localhost:3000/wyr
        '/wyr': 'http://localhost:3000/'
    }
  }
})
