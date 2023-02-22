import { defineStore } from 'pinia'

export const useSettingStore = defineStore('settingStore', {
  persist: {
    key: 'settingStore',
    storage: localStorage,
  },
  state: () => {
    return {
      layoutHasSide: true,
      settingPanelShow: false,
      sideWidth: '200px',
      isMenuCollapse: false,
    }
  },
  getters: {
    layoutSideStatus(state) {
      return state.layoutHasSide
    },
    settingPanelStatus(state) {
      return state.settingPanelShow
    },
    getSideWidth(state) {
      return state.sideWidth
    },
    getMenuCollapse(state) {
      return state.isMenuCollapse
    },
  },
  actions: {
    changeLayoutSideStatus(data: boolean) {
      this.layoutHasSide = data
    },
    changeSettingPanelStatus(data: boolean) {
      this.settingPanelShow = data
    },
    changeMenuCollapse(data: boolean) {
      this.isMenuCollapse = data
    },
    changeSideWidth(data: string) {
      this.sideWidth = data
    },
  },
})
