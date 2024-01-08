<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routers = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})
console.log(routers.value)
</script>

<template>
  <el-breadcrumb separator="/" pl-10px>
    <el-breadcrumb-item v-for="item in routers" :key="item.path">{{
      item.meta.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>
