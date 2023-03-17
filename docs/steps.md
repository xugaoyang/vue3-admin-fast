#### 框架更新流程
1. 初始化:
```bash
pnpm create vite my-vue-app --template vue-ts
```
2. 添加UI框架,考虑引入方式
```bash
pnpm install element-plus
```
3. 改造初始化代码，添加路由和状态管理
```bash
pnpm install vue-router nprogress

pnpm install pinia pinia-plugin-persistedstate
```

1. 添加公共库
```bash
// windicss -> 公共样式库
pnpm i -D vite-plugin-windicss windicss

// sass -> .vue文件sass语法支持
pnpm i sass -D

```

5. 添加格式化和规则限制插件
```bash
// eslint
pnpm add eslint -D
// 初始化eslint
pnpm eslint --init

// prettier
pnpm i prettier -D

// eslint、prettier兼容
pnpm add eslint-config-prettier eslint-plugin-prettier -D

// stylelint
pnpm add postcss postcss-scss postcss-html stylelint stylelint-config-prettier stylelint-config-rational-order stylelint-config-standard stylelint-config-recommended-vue stylelint-config-recommended-scss stylelint-order -D

// husky
pnpm add husky -D

// gitcommit
pnpm add commitizen cz-customizable -D

```

6. 添加工具库
```
// axios
pnpm i axios
// lodash
pnpm i lodash-es
// dayjs
pnpm i dayjs
// echart
pnpm i echart
// vueuse
pnpm i @vueuse/core
```

7. type补充

```js
// tsconfig.json. ts添加公共路径别名
  "compilerOptions": {
    ...
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "#/*": ["types/*"]
    }
  },
```
```js
// vite.config.ts.添加对应公共路径别名
import path from 'path'
...

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '#': path.resolve(__dirname, 'types'),
    },
  },
  ...
})

```

8. 主题切换
- [x] 使用useDark钩子来进行普通黑白皮肤的切换

9. layout组件
  - [ ] 导航栏：navbar【面包屑，支持导航栏菜单顶部展示】
  - [x] logo: logo
  - [x] 标签导航: tagview【TODO:支持批量删除】
  - [x] 侧边菜单：sidebarmenu
  - [x] 全局配置：setting
    - [x] layout布局【1. 侧边菜单；2. 顶部菜单】
    - [x] 主题色色板配置
    - [x] 导航栏色板配置
    - [x] 侧边菜单色板配置


10. axios配置




11. 错误页
- [x] 403 - 抱歉，您无权访问此页面 --> 返回首页
- [x] 404 - 抱歉，您访问的页面不存在 --> 返回首页
- [x] 500 - 抱歉，服务器报告错误 --> 返回首页

12. 页面补充
- [ ] 登录
- [ ] 首页
- [ ] 国际化

13. mock数据

14. 单元测试