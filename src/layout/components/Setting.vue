<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSettingStore } from '../../store/setting'
const settingStore = useSettingStore()
const settingPanelShow = computed(() => settingStore.settingPanelStatus)
const direction = ref('rtl')
console.log(settingPanelShow)
const handleClose = done => {
  settingStore.changeSettingPanelStatus(false)
  console.log(settingPanelShow)
}
</script>

<template>
  <el-drawer
    v-model="settingPanelShow"
    title="I am the title"
    :direction="direction"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>
