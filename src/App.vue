<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useMainStore } from './store'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { locale } = storeToRefs(mainStore)
</script>

<template>
  <el-config-provider :locale="locale === 'zhCn' ? zhCn : en">
    <router-view />
  </el-config-provider>
</template>

<style scoped>
#nprogress .bar {
  height: 4px !important;
  background: purple !important;
}
</style>
