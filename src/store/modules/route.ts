import { defineStore } from 'pinia'
import { reject } from 'lodash-es'

interface Tag {
  path: string
  showName: string
  name: string
  fullPath: string
  meta: object
  params: object
  query: object
}

export const useRouteStore = defineStore('routeStore', {
  persist: {
    key: 'routeStore',
    storage: localStorage,
  },
  state: () => {
    return {
      tags: [],
      currentTag: {},
      menu: [],
    }
  },
  getters: {
    getTags(state) {
      return state.tags
    },
    getCurrentTag(state) {
      return state.currentTag
    },
    getMenu(state) {
      return state.menu
    },
  },
  actions: {
    addTag(data: Tag) {
      this.tags.push(data)
    },
    deleteTag(data: Tag) {
      this.tags = reject(this.tags, ['fullPath', data.fullPath])
    },
    changeCurrentTag(data: Tag) {
      this.currentTag = data
    },
    changeMenu(data: []) {
      this.menu = data
    },
  },
})
