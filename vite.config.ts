import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  console.log('node服务日志', command, mode)
  const env = loadEnv(mode, process.cwd(), ['VITE', 'TEST'])
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
    plugins: [vue(), WindiCSS()],
  }
})
