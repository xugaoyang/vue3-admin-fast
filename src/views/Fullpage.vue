<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
console.log(router, router.getRoutes())
</script>

<template>
  <router-link :to="'/layout'">页面跳转</router-link>
</template>

<style scoped></style>
