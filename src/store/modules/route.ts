import { defineStore } from 'pinia'
import { reject } from 'lodash-es'
import type { TagParams } from '#/tag'

export const useRouteStore = defineStore('routeStore', {
  persist: {
    key: 'routeStore',
    storage: localStorage,
  },
  state: () => {
    return {
      tags: [] as TagParams[],
      currentTag: {} as TagParams,
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
    addTag(data: TagParams) {
      this.tags.push(data)
    },
    deleteTag(data: TagParams) {
      this.tags = reject(this.tags, ['fullPath', data.fullPath])
    },
    deleteAllTag() {
      this.tags = []
    },
    changeTags(data: TagParams[]) {
      this.tags = data
    },
    changeCurrentTag(data: TagParams) {
      this.currentTag = data
    },
    changeMenu(data: []) {
      this.menu = data
    },
  },
})
