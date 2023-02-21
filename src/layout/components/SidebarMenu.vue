<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { routes as routeData } from '../../router'
import { forEach, isEmpty, has, startsWith } from 'lodash-es'
import sidebarItem from './SidebarItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

console.log(router.options)

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
    if (!isEmpty(route.children)) {
      forEach(route.children, child => {
        // fixed: 当侧边栏重新渲染时，children里面的path会一直拼接，做一层判断
        child.path = startsWith(child.path, '/')
          ? child.path
          : `${route.path}/${child.path}`
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
