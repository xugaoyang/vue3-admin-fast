<script setup lang="ts">
import { useSettingStore } from '../store/modules/setting'
import { storeToRefs } from 'pinia'
import { useDark } from '@vueuse/core'

import sidebar from './components/SidebarMenu.vue'
import navbar from './components/Navbar.vue'
import tagView from './components/TagView.vue'

const settingStore = useSettingStore()
const { sideWidth, layoutHasSide, sideColor, mainColor } =
  storeToRefs(settingStore)
const isDark = useDark()
console.log('侧边栏获取isDark', isDark.value)

const getSideColor = () => {
  return isDark.value ? '' : sideColor.value
}
// 初始化配置
const initConfig = () => {
  // 主题色init
  document.documentElement.style.setProperty(
    '--el-color-primary',
    mainColor.value,
  )

  document.documentElement.style.setProperty('--el-menu-item-height', '47px')
}
initConfig()
</script>

<template>
  <el-container class="layout">
    <el-header class="layout-header"><navbar /></el-header>
    <el-container class="layout-has-side">
      <el-aside
        :width="sideWidth"
        v-if="layoutHasSide"
        class="sidebar-wrapper"
        :style="{ backgroundColor: getSideColor() }"
      >
        <sidebar />
      </el-aside>
      <el-main class="layout-content-with-tagview"
        ><div class="tag-wrapper"><tag-view /></div>
        <div class="layout-content">
          <div class="h-full rounded-5px view-shadow overflow-y-auto">
            <router-view></router-view>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.layout {
  height: 100%;
}

.layout-header {
  padding: 0;
  height: 50px;
  border-bottom: 1px solid #eee;
}

.layout-has-side {
  height: calc(100% - 50px);
}

.layout-content {
  overflow-x: hidden;
  padding: 10px;
  height: calc(100% - 60px);
}

.sidebar-wrapper {
  height: 100%;
  border-right: 1px solid #eee;
}

.el-main {
  overflow: hidden;
  padding: 0;
}

.tag-wrapper {
  // border-top: 1px solid #eee;
}

.view-shadow {
  box-shadow: 0 0 5px rgb(0 0 0 / 15%);
}
</style>
