import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

console.log('vite-plugin', viteMockServe)

export default defineConfig(({ command, mode }) => {
  console.log('node服务日志', command, mode, process.env)
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env)
  return {
    base: mode === 'development' ? './' : '/vue3-admin-fast/',
    envPrefix: ['VITE', 'TEST'],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'types'),
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://echo.apifox.com/image/jpeg',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      watch: null,
      minify: true,
      rollupOptions: {
        output: {
          // manualChunks: path => {
          //   if (path.includes('node_modules')) {
          //     return 'vendor'
          //   }
          // },
        },
      },
    },
    plugins: [
      vue(),
      WindiCSS(),
      // UnoCSS({
      //   configFile: '../uno.config.ts',
      // }),
      splitVendorChunkPlugin(),
      viteMockServe({
        mockPath: 'mock',
        enable: command === 'serve',
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-import.d.ts',
        eslintrc: {
          enabled: true,
        },
      }),
    ],
  }
})
