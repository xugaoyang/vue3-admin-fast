import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  {
    path: '/',
    name: 'element-test',
    component: () =>
      import(/* webpackChunkName: 'home' */ '../views/features/element.vue'),
    meta: {
      title: 'element-test',
    },
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: () =>
      import(
        /* webpackChunkName: 'helloworld' */ '../views/features/HelloWorld.vue'
      ),
    meta: {
      title: 'helloworld',
    },
  },
  {
    path: '/layout',
    name: 'layout',
    component: () =>
      import(/* webpackChunkName: 'layout' */ '../layout/index.vue'),
    meta: {
      title: 'layout',
    },
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

export default router
