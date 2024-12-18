import { fileURLToPath, URL } from 'node:url'
import { prismjsPlugin } from 'vite-plugin-prismjs';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Cesium from 'vite-plugin-cesium'
import unoCss from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),Cesium(), vueJsx(),
  unoCss(),
  AutoImport({
    imports:['vue'],
    dts:'src/auto-import.d.ts'
  }),
    prismjsPlugin({
      languages: 'all',
      plugins: ['line-numbers', 'copy-to-clipboard'], //官网有其他功能,这里开启行数和复制按钮功能
      theme: 'solarizedlight',//主题名称
      css: true,
  })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
