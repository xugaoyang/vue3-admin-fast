import { defineStore } from 'pinia'

export const useRouteStore = defineStore('RouteStore', {
  persist: {
    key: 'RouteStore',
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
    changeTags(data) {
      // 操作tags
    },
    changeMenu(data) {
      this.menu = data
    },
  },
})
