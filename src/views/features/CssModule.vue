<script setup lang="ts">
import testCss from '@/styles/test.module.css'

console.log(testCss)
fetch('/api').then(data => console.log('接口数据', data))
</script>

<template>
  <div :class="testCss.cssModuleDiv" class="w-100px h-100px">
    <div :class="testCss.cssModuleTitle">title</div>
  </div>
</template>

<style scoped></style>
