<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSettingStore } from '../../store/modules/setting'
import { storeToRefs } from 'pinia'

const settingStore = useSettingStore()
const { layoutSideStatus, mainColor, sideColor, naviColor } =
  storeToRefs(settingStore)
const settingPanelShow = computed(() => settingStore.settingPanelStatus)
const direction = ref('rtl')

const handleClose = () => {
  settingStore.changeSettingPanelStatus(false)
}
const changeSidebar = () => {
  settingStore.changeLayoutSideStatus(!layoutSideStatus.value)
}
const changeColor = (data: string) => {
  settingStore.changeMainColor(data)
}
</script>

<template>
  <el-drawer
    v-model="settingPanelShow"
    title="系统配置"
    :direction="direction"
    :before-close="handleClose"
  >
    <div class="p-5px">
      <el-button @click="changeSidebar">切换侧边栏</el-button>
    </div>
    <el-row class="p-5px">
      <span>布局配置：</span>
    </el-row>
    <el-row class="p-5px">
      <span>主题色配置：</span>
      <el-color-picker v-model="mainColor" @change="changeColor" />
    </el-row>
    <el-row class="p-5px">
      <span>导航栏配置：</span>
      <el-color-picker v-model="naviColor" />
    </el-row>
    <el-row class="p-5px">
      <span>侧边栏配置：</span>
      <el-color-picker v-model="sideColor" />
    </el-row>
  </el-drawer>
</template>
