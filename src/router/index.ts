/**
 * meta 定义
 * title: 标题，侧边栏展示名称
 * showInMenu: 是否展示在侧边栏或者标签导航
 * icon: 展示图标
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '../layout/index.vue'
import { includes, find } from 'lodash-es'
import { useRouteStore } from '../store/modules/route'
import { storeToRefs } from 'pinia'
import errorRoutes from './modules/error'
import type { TagParams } from '#/tag'

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: { title: '首页', showInMenu: true },
    component: Layout,
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('../views/home/Welcome.vue'),
        meta: {
          title: 'welcome',
          showInMenu: true,
        },
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { title: 'dashboard', showInMenu: true },
    component: Layout,
    children: [
      {
        path: 'analysis',
        name: 'analysis',
        component: () => import('../views/dashboard/Analysis.vue'),
        meta: {
          title: '分析页',
          showInMenu: true,
        },
      },
    ],
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../layout/index.vue'),
    meta: {
      title: '布局',
      showInMenu: true,
      icon: '',
    },
  },
  {
    path: '/fullpage',
    name: 'fullpage',
    component: () => import('../views/Fullpage.vue'),
    meta: {
      title: '全屏界面',
      showInMenu: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录',
      showInMenu: false,
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
        component: () => import('../views/features/HelloWorld.vue'),
        name: 'helloworld',
        meta: { title: '官网demo', showInMenu: true },
      },
      {
        path: 'element-plus',
        name: 'element-plus',
        component: () => import('../views/features/ElementPlus.vue'),
        meta: {
          title: 'element-plus',
          showInMenu: true,
        },
      },
      {
        path: 'cssModule',
        name: 'cssModule',
        component: () => import('../views/features/CssModule.vue'),
        meta: {
          title: 'cssModule',
          showInMenu: true,
        },
      },
      {
        path: 'unocss',
        name: 'unocss',
        component: () => import('../views/features/UnoCss.vue'),
        meta: {
          title: 'unocss',
          showInMenu: true,
        },
      },
      {
        path: 'echarts',
        name: 'echarts',
        component: () => import('../views/features/Echarts.vue'),
        meta: {
          title: 'echarts',
          showInMenu: true,
        },
      },
      {
        path: 'mock',
        name: 'mock',
        component: () => import('../views/features/Mock.vue'),
        meta: {
          title: 'mock',
          showInMenu: true,
        },
      },
    ],
  },
  {
    path: '/error',
    name: 'error',
    meta: { title: '异常页', showInMenu: true },
    component: Layout,
    children: [
      {
        path: '403',
        name: 'error-403',
        component: () => import('../views/errors/403.vue'),
        meta: {
          title: '403',
          showInMenu: true,
        },
      },
      {
        path: '404',
        name: 'error-404',
        component: () => import('../views/errors/404.vue'),
        meta: {
          title: '404',
          showInMenu: true,
        },
      },
      {
        path: '500',
        name: 'error-500',
        component: () => import('../views/errors/500.vue'),
        meta: {
          title: '500',
          showInMenu: true,
        },
      },
    ],
  },
]
const commonRoutes = [
  {
    path: '/',
    redirect: '/login',
  },
  ...errorRoutes,
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...commonRoutes, ...routes],
})

NProgress.configure({ showSpinner: false })

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach((to, from) => {
  NProgress.done()
  console.log(to, from)
  const routeStore = useRouteStore()
  console.log(routeStore)
  if (includes(['/login', '/403', '/404', '/500'], to.fullPath)) {
    return
  }
  if (to.meta && !to.meta.showInMenu) {
    return
  }
  const tag: TagParams = {
    fullPath: to.fullPath,
    meta: to.meta,
    name: to.name as string,
    params: to.params,
    path: to.path,
    query: to.query,
    showName: `${to.meta.title as string}` || '404',
  }
  const { tags } = storeToRefs(routeStore)
  const exist = find(tags.value, { fullPath: tag.fullPath })
  if (!exist) {
    routeStore.addTag(tag)
  }
  routeStore.changeCurrentTag(tag)
})

export { routes, router }
