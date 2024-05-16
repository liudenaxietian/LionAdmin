import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      "/api": {
        //主页模块接口
        target: "http://127.0.0.1:9981",//开发环境
        // target:"http://172.31.12.241:9981", //正式环境
        // target:"http://127.0.0.1:9982", //测试环境
        changeOrigin: true,
        secure: true,
        ws: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
      "/pm": {
        //项目管理模块接口
        // target:"http://127.0.0.1:9981",
        target: "http://172.31.12.241:20000",
        changeOrigin: true,
        secure: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/pm/, '/api')
      },
      "/doc": {
        //文档管理模块接口
        // target:"http://127.0.0.1:9981",
        target: "http://172.31.12.225:6676",
        changeOrigin: true,
        secure: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/doc/, '/api')
      }
    }
  }
})
