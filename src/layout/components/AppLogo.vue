<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSettingStore } from '../../store/modules/setting'
const settingStore = useSettingStore()
const { isMenuCollapse } = storeToRefs(settingStore)
</script>

<template>
  <div class="logo flex justify-center items-center">
    <img class="h-40px" src="../../assets/logo.png" alt="logo" />
    <span class="text-18px font-bold" v-if="!isMenuCollapse">Vue3 admin</span>
  </div>
</template>

<style scoped lang="scss"></style>
