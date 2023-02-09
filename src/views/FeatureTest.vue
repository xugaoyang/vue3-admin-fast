<script setup lang="ts">
import { ref } from 'vue'
import { useMainStore } from '../store'
import { storeToRefs } from 'pinia'
const mainStore = useMainStore()
const { locale } = storeToRefs(mainStore)
const changeLocale = () => {
  console.log(locale.value)
  if (locale.value !== 'en') {
    mainStore.changeLocale('en')
  } else {
    mainStore.changeLocale('zhCn')
  }
}
const date = ref('')
</script>

<template>
  <div class="p-20px">
    <h3 class="text-24px">功能调试页</h3>
    <el-divider />
    <router-link :to="'/helloworld'">页面跳转</router-link>
    <el-divider />
    <el-row class="pb-20px">
      <el-button type="primary" @click="changeLocale()">changeLocale</el-button>
    </el-row>
    <el-row class="pb-20px">
      <span>国际化：{{ locale }}</span>
    </el-row>
    <el-row class="pb-20px"
      ><el-date-picker v-model="date" type="date" placeholder="Pick a day"
    /></el-row>
    <el-divider />
  </div>
</template>

<style scoped lang="scss"></style>
