import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/list',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      }
    },
  },
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben',
        },
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
] as MockMethod[]
