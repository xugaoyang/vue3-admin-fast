import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '../layout/index.vue'

const routes = [
  {
    path: '/layout',
    name: 'layout',
    component: () =>
      import(/* webpackChunkName: 'layout' */ '../layout/index.vue'),
    meta: {
      title: '布局',
    },
  },

  {
    path: '/feature',
    name: 'feature',
    meta: { title: '功能调试' },
    component: Layout,
    children: [
      {
        path: 'helloworld',
        component: () =>
          import(
            /* webpackChunkName: 'helloworld' */ '../views/features/HelloWorld.vue'
          ),
        name: 'helloworld',
        meta: { title: '官网demo' },
      },
      {
        path: 'element-plus',
        name: 'element-plus',
        component: () =>
          import(
            /* webpackChunkName: 'home' */ '../views/features/element.vue'
          ),
        meta: {
          title: 'element-plus',
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

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
  NProgress.done()
})

export { routes, router }
