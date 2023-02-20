<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { routes as routeData } from '../../router'
import { forEach, isEmpty, has } from 'lodash-es'
import sidebarItem from './SidebarItem.vue'

console.log('路由源数据', routeData)

// 递归循坏路由

const recursionRoutes = routes => {
  if (isEmpty(routes)) {
    return []
  }
  forEach(routes, route => {
    if (!has(route, 'children')) {
      route.children = []
    }
    delete route.component
    if (!isEmpty(route.children)) {
      forEach(route.children, child => {
        child.path = `${route.path}/${child.path}`
      })
      recursionRoutes(route.children)
    }
  })
  return routes
}

const menus = recursionRoutes(routeData)
console.log('数据处理', menus)
</script>

<template>
  <el-menu>
    <sidebar-item
      v-for="menu in menus"
      :key="menu.id"
      :model="menu"
    ></sidebar-item>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu {
  border-right: 0;
}
</style>
