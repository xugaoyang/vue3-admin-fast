/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'element-plus'

declare module 'element-plus/dist/locale/zh-cn.mjs'

declare module 'element-plus/dist/locale/en.mjs'

declare module 'vite-plugin-mock/es/createProdMockServer'

declare module 'animejs/lib/anime.es.js'
