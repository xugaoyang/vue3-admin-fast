<script setup lang="ts">
import { useRouter } from 'vue-router'
import { HomeFilled } from '@element-plus/icons-vue'
import type { RouteParams } from '#/route'

const router = useRouter()
const props = defineProps(['model'])
console.log('属性值', props.model)
const menuClicked = (data: RouteParams) => {
  console.log(data)
  router.push(data.path)
}
</script>

<template>
  <el-sub-menu v-if="model.children.length" :index="model.path">
    <template #title>
      <el-icon><HomeFilled /></el-icon>
      <span>{{ model.meta.title }}</span>
    </template>
    <SidebarItem
      v-for="item in model.children"
      :key="item.id"
      :model="item"
    ></SidebarItem>
  </el-sub-menu>
  <el-menu-item v-else :index="model.path" @click="menuClicked(model)">
    <el-icon><HomeFilled /></el-icon>
    <span>{{ model.meta.title }}</span>
  </el-menu-item>
</template>
