<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSettingStore } from '../../store/setting'
import { Setting } from '@element-plus/icons-vue'
import appLogo from './AppLogo.vue'
import setting from './Setting.vue'

const settingStore = useSettingStore()
const logoWidth = computed(() => settingStore.getSideWidth)
const openSettingPanel = () => {
  settingStore.changeSettingPanelStatus(true)
}
</script>

<template>
  <div class="flex justify-between items-center">
    <app-logo :style="`width: ${logoWidth}`" />
    <div class="flex justify-between items-center header-right">
      <el-breadcrumb separator="/" class="pl-10px">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="/">promotion management</a></el-breadcrumb-item
        >
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="flex items-center">
        <span>admin</span>
        <el-icon class="cursor-pointer" @click="openSettingPanel()"
          ><Setting
        /></el-icon>
      </div>
    </div>
    <setting />
  </div>
</template>

<style scoped lang="scss">
.header-right {
  width: calc(100% - 200px);
}
</style>
