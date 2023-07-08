<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('helloworld')
</script>

<template>
  <div class="h-full w-full">
    {{ msg }}
    <div class="height-200px bg-red-deep">
      <span class="button">按钮</span>
    </div>
  </div>
</template>

<style>
/* @import url('yx-css-demo/src/index.css'); */
</style>
