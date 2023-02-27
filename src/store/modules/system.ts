import { defineStore } from 'pinia'

interface User<T = string | number> {
  [key: string]: T
}

export const useSystemStore = defineStore('systemStore', {
  persist: {
    key: 'systemStore',
    storage: localStorage,
  },
  state: () => {
    return {
      user: {},
      theme: 'white',
      locale: 'zhCn',
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
    changeUser(data: User<string>) {
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
