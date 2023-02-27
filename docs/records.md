#### 问题记录

1. storeToRefs 解构出来的值，不能直接在 js 使用,也需要加上`.value`
2. vite 不能使用 require 来引用静态资源
3. eslint 初始化之后报错`error  Parsing error: '>' expected`,参考[vue3+ts+vite 项目中使用 eslint+prettier+stylelint+husky 指南](https://juejin.cn/post/7118294114734440455)
4. `cz-customizable`在`type:module`使用问题,参考[issue#199](https://github.com/leoforfree/cz-customizable/issues/199)
5. element-plus输入框focus会出现多余边框？windicss样式覆盖了。。`windicss关闭预检有效`
```ts
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: false,
})
```

6. `pinia`在非组件使用,会报错pinia未注册的错误，参考[pinia官方文档](https://pinia.web3doc.top/core-concepts/outside-component-usage.html)

7. 在处理错误路由页面配置的时候，相同的路由name会导致路由页面渲染不出来，有警告信息`No match found for location with path`, 访问后的路由信息中`name:undefined`,检查对应路由信息配置是否有问题

8. 虽然vite.config中默认有src目录的路径别名配置，但是实际开发过程中依然会有ts报错——”找不到模块或声明“，这时需要在tsconfig.json中新增 `"paths": { "@/*": ["src/*"] } 配置，但是会提示错误：未设置 "baseUrl" 时，不允许使用非相对路径。是否忘记了前导 "./"?`，因而再增加 "baseUrl": "." 配置


#### ts 报错

1. `Don't use `{}`as a type.`{}` actually means "any non-nullish value".`

```js
"rules": {
  "@typescript-eslint/ban-types": [
    "error",
    {
      "extendDefaults": true,
      "types": {
        "{}": false
      }
    }
  ]
}
```

2. 无法找到模块“element-plus/dist/locale/zh-cn.mjs”的声明文件

```ts
declare module 'element-plus/dist/locale/zh-cn.mjs'
```

3. 无法找到模块“./App.vue”的声明文件

```ts
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```