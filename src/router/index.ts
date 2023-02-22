/**
 * meta 定义
 * title: 标题，侧边栏展示名称
 * showInMenu: 是否展示在侧边栏或者标签导航
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '../layout/index.vue'
import { includes, find } from 'lodash-es'
import { useRouteStore } from '../store/modules/route'
import { storeToRefs } from 'pinia'

const routes = [
  {
    path: '/layout',
    name: 'layout',
    component: () =>
      import(/* webpackChunkName: 'layout' */ '../layout/index.vue'),
    meta: {
      title: '布局',
      showInMenu: true,
      icon: '',
    },
  },
  {
    path: '/fullpage',
    name: 'fullpage',
    component: () =>
      import(/* webpackChunkName: 'layout' */ '../views/Fullpage.vue'),
    meta: {
      title: '全屏界面',
      showInMenu: true,
    },
  },
  {
    path: '/feature',
    name: 'feature',
    meta: { title: '功能调试', showInMenu: true },
    component: Layout,
    children: [
      {
        path: 'helloworld',
        component: () =>
          import(
            /* webpackChunkName: 'helloworld' */ '../views/features/HelloWorld.vue'
          ),
        name: 'helloworld',
        meta: { title: '官网demo', showInMenu: true },
      },
      {
        path: 'element-plus',
        name: 'element-plus',
        component: () =>
          import(
            /* webpackChunkName: 'home' */ '../views/features/ElementPlus.vue'
          ),
        meta: {
          title: 'element-plus',
          showInMenu: true,
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from) => {
  NProgress.start()
})

router.afterEach((to, from) => {
  NProgress.done()
  console.log(to, from)
  const routeStore = useRouteStore()
  console.log(routeStore)
  if (includes(['/login', '/401', '/404'], to.fullPath)) {
    return
  }
  if (to.meta && !to.meta.showInMenu) {
    return
  }
  const tag = {
    fullPath: to.fullPath,
    meta: to.meta,
    name: to.name,
    params: to.params,
    path: to.path,
    query: to.query,
    showName: to.meta?.title || '404',
  }
  console.log(tag)
  const { tags } = storeToRefs(routeStore)
  console.log(tags)
  const exist = find(tags.value, { showName: tag.showName })
  console.log(exist)
  if (!exist) {
    routeStore.addTag(tag)
  }
  routeStore.changeCurrentTag(tag)
})

export { routes, router }
