<script setup lang="ts">
import { ref } from 'vue'
import appLogo from './AppLogo.vue'
const logoWidth = ref('200px')
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
      <div>admin</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-right {
  width: calc(100% - 200px);
}
</style>
