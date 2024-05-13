import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://172.31.12.241:9981",
        changeOrigin: true,
      }
    }
  }
})
