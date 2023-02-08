import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  persist: {
    key: 'mainStore',
    storage: localStorage,
  },
  state: () => {
    return {
      user: {},
      theme: 'white',
      locale: 'zhCn'
    }
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getTheme(state) {
      return state.theme
    },
    getLocale(state) {
      return state.locale
    },
  },
  actions: {
    changeUser(data: any) {
      Object.assign(this.user, data)
    },
    changeTheme(data: string) {
      this.theme = data
    },
    changeLocale(data: string) {
      this.locale = data
    },
  },
})
