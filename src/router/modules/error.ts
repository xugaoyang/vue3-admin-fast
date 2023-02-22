export default [
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
]
