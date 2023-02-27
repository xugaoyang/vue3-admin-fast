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
      mainColor: '#409EFF',
      naviColor: '#409EFF',
      sideColor: '#409EFF',
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
    getMainColor(state) {
      return state.mainColor
    },
    getNaviColor(state) {
      return state.naviColor
    },
    getSideColor(state) {
      return state.sideColor
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
    changeMainColor(data: string) {
      this.mainColor = data
      document.documentElement.style.setProperty('--el-color-primary', data)
    },
    changeNaviColor(data: string) {
      this.naviColor = data
    },
    changeSideColor(data: string) {
      this.sideColor = data
    },
  },
})
