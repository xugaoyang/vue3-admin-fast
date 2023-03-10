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
      naviColor: '#fff',
      sideColor: '#fff',
      lastSideColor: '#fff',
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
    getLastSideColor(state) {
      return state.lastSideColor
    },
  },
  actions: {
    changeLayoutSideStatus(data: boolean) {
      this.layoutHasSide = data
      // 侧边 --> 顶栏，logo默认最大宽度，菜单不折叠；顶栏 --> 侧边，侧边不折叠，logo默认最大宽度
      this.sideWidth = '200px'
      this.isMenuCollapse = false
      // 缓存从侧边到顶栏的sideColor,当还原回来的时候需要重置到这个颜色，不还原就赋值naviColor
      if (!data) {
        this.sideColor = this.naviColor
      } else {
        this.sideColor = this.lastSideColor
      }
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
      this.lastSideColor = data
    },
  },
})
