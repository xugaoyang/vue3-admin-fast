#### 问题记录

1. storeToRefs 解构出来的值，不能直接在 js 使用，也需要加上`.value`
2. vite 不能使用 require 来引用静态资源
3. eslint 初始化之后报错`error  Parsing error: '>' expected`,参考[vue3+ts+vite 项目中使用 eslint+prettier+stylelint+husky 指南](https://juejin.cn/post/7118294114734440455)
4. `cz-customizable`在`type:module`使用问题，参考[issue#199](https://github.com/leoforfree/cz-customizable/issues/199)


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