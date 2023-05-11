<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('helloworld')
</script>

<template>
  <div class="h-full w-full">
    {{ msg }}
  </div>
</template>

<style scoped></style>
