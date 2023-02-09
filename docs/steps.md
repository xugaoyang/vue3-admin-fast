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

// husky+lintstaged

// gitcommit
```

6. 添加工具库
```
// axios
pnpm i axios
// lodash
pnpm i lodash
// dayjs
pnpm i vueuse
// echart
pnpm i echart
// vueuse
pnpm i vueuse
```

7. type补充


