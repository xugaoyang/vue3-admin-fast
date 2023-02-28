<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSettingStore } from '../../store/modules/setting'
import { storeToRefs } from 'pinia'

const settingStore = useSettingStore()
const { mainColor, sideColor, naviColor } = storeToRefs(settingStore)
const settingPanelShow = computed(() => settingStore.settingPanelStatus)
const direction = ref('rtl')

const handleClose = () => {
  settingStore.changeSettingPanelStatus(false)
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
    <el-row class="p-5px flex items-center">
      <span class="w-100px">布局配置：</span>
      <div
        class="layout-img cursor-pointer"
        @click="settingStore.changeLayoutSideStatus(true)"
      >
        <img
          src="../../assets/svg/layoutWithSide.svg"
          alt="logo"
          class="w-40px h-full"
        />
      </div>
      <div
        class="layout-img cursor-pointer"
        @click="settingStore.changeLayoutSideStatus(false)"
      >
        <img
          src="../../assets/svg/layoutWithoutSide.svg"
          alt="logo"
          class="w-40px h-full"
        />
      </div>
    </el-row>
    <el-row class="p-5px">
      <span class="w-100px">主题色配置：</span>
      <el-color-picker v-model="mainColor" @change="changeColor" />
    </el-row>
    <el-row class="p-5px">
      <span class="w-100px">导航栏配置：</span>
      <el-color-picker v-model="naviColor" />
    </el-row>
    <el-row class="p-5px">
      <span class="w-100px">侧边栏配置：</span>
      <el-color-picker v-model="sideColor" />
    </el-row>
  </el-drawer>
</template>

<style lang="scss" scoped>
.layout-img {
  margin-right: 10px;
  height: 40px;
  box-sizing: border-box;
  border: 2px solid transparent;
  border-radius: 4px;

  &:hover {
    border: 2px solid var(--el-color-primary);
  }
}
</style>
