import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { injectHtml } from 'vite-plugin-html';






// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
     injectHtml({
      injectData: {
        title: 'OAO',
      },
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
    }
  },
  proxy: {
    '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        },
        rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
})
