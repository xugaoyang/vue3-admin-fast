<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMainStore } from '../../store'
import { useSettingStore } from '../../store/setting'
import { Setting, Sunny, Moon } from '@element-plus/icons-vue'
import appLogo from './AppLogo.vue'
import setting from './Setting.vue'
import { useDark, useToggle } from '@vueuse/core'

const mainStore = useMainStore()
const settingStore = useSettingStore()
const isDark = useDark({
  onChanged(dark: boolean) {
    console.log(dark)
    const htmlEle = document.querySelector('html')
    if (dark) {
      mainStore.changeTheme('dark')
      htmlEle?.setAttribute('class', 'dark')
    } else {
      mainStore.changeTheme('light')
      htmlEle?.setAttribute('class', 'light')
    }
  },
})
const toggleDark = useToggle(isDark)
const currentTheme = computed(() => (mainStore.theme === 'dark' ? true : false))
const logoWidth = computed(() => settingStore.getSideWidth)
const openSettingPanel = () => {
  settingStore.changeSettingPanelStatus(true)
}
const avatarUrl = ref(
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
)
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
      <div class="flex justify-around items-center">
        <el-switch
          @change="toggleDark"
          v-model="currentTheme"
          inline-prompt
          :active-icon="Moon"
          :inactive-icon="Sunny"
        />
        <span class="pl-5px flex items-center">
          <el-avatar class="mr-5px" :size="20" :src="avatarUrl" />
          admin
        </span>
        <el-icon class="cursor-pointer pl-5px" @click="openSettingPanel()"
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
