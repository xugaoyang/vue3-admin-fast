<script setup lang="ts">
import { ref } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const size = ref('small')
const zIndex = ref(3000)
const locale = ref(zhCn)
</script>

<template>
  <el-config-provider :locale="locale" :size="size" :z-index="zIndex">
    <router-view />
  </el-config-provider>
</template>

<style scoped>
#nprogress .bar {
  height: 4px !important;
  background: purple !important;
}
</style>
