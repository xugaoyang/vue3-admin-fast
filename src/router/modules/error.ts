export default [
  {
    path: '/403',
    name: '403',
    component: () => import('../../views/errors/403.vue'),
    meta: {
      title: '403',
      showInMenu: true,
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../../views/errors/404.vue'),
    meta: {
      title: '404',
      showInMenu: true,
    },
  },
  {
    path: '/500',
    name: '500',
    component: () => import('../../views/errors/500.vue'),
    meta: {
      title: '500',
      showInMenu: true,
    },
  },
]
