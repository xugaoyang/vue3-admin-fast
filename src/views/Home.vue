<script setup lang="ts">
import { useMainStore } from '../store';
const mainStore = useMainStore()
</script>

<template>
  <div>首页</div>
  <router-link :to="'/helloworld'">跳转</router-link>
  <div>{{ mainStore.locale }}</div>
</template>

<style scoped>

</style>
