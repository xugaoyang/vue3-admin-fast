import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */ '../views/Home.vue'),
    meta: {
      title: 'home',
    },
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: () => import(/* webpackChunkName: 'helloworld' */ '../components/Helloworld.vue'),
    meta: {
      title: 'helloworld',
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
