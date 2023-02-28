<script setup lang="ts">
import { useSettingStore } from '../store/modules/setting'
import { storeToRefs } from 'pinia'

import sidebar from './components/SidebarMenu.vue'
import navbar from './components/Navbar.vue'
import tagView from './components/TagView.vue'

const settingStore = useSettingStore()
const { sideWidth, layoutHasSide, sideColor, mainColor } =
  storeToRefs(settingStore)

// 初始化配置
const initConfig = () => {
  // 主题色init
  document.documentElement.style.setProperty(
    '--el-color-primary',
    mainColor.value,
  )
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
        :style="{ backgroundColor: sideColor }"
      >
        <sidebar />
      </el-aside>
      <el-main
        ><div class="h-30px"><tag-view /></div>
        <div class="layout-content"><router-view></router-view></div>
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

.layout-content {
  height: calc(100% - 30px);
}

.layout-has-side {
  height: calc(100% - 50px);
}

.sidebar-wrapper {
  height: 100%;
  border-right: 1px solid #eee;
}

.el-main {
  padding: 10px;
}
</style>
