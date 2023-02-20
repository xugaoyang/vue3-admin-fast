<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps(['model'])
console.log('属性值', props.model)
const menuClicked = data => {
  console.log(data)
  router.push(data.path)
}
</script>

<template>
  <el-sub-menu v-if="model.children.length" :index="model.path">
    <template #title>
      <span>{{ model.meta.title }}</span>
    </template>
    <SidebarItem
      v-for="item in model.children"
      :key="item.id"
      :model="item"
    ></SidebarItem>
  </el-sub-menu>
  <el-menu-item v-else :index="model.path">
    <span @click="menuClicked(model)">{{ model.meta.title }}</span>
  </el-menu-item>
</template>
