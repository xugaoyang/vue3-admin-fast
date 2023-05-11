<script setup lang="ts">
import { ref } from 'vue'
import request from '@/utils/request'
const data = ref(null)
const getData = function () {
  request({
    url: '/api/list',
    method: 'get',
  }).then(res => {
    console.log('请求成功!', res)
    data.value = res.data
  })
}
</script>

<template>
  <div class="h-full w-full">
    <el-button @click="getData">点我mock</el-button>
    <div>这是请求到的数据{{ data }}</div>
  </div>
</template>

<style scoped></style>
