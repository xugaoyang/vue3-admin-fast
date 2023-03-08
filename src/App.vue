<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useSystemStore } from './store/modules/system'
import { storeToRefs } from 'pinia'

const SystemStore = useSystemStore()
const { locale } = storeToRefs(SystemStore)
console.warn(import.meta.env)
</script>

<template>
  <el-config-provider :locale="locale === 'zhCn' ? zhCn : en">
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
