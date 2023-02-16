<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(false)
const direction = ref('rtl')
</script>

<template>
  <el-drawer v-model="drawer" title="I am the title" :direction="direction">
    <span>Hi, there!</span>
  </el-drawer>
</template>
