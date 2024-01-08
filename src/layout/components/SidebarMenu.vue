<script setup lang="ts">
import { computed } from 'vue'
import { routes as routeData } from '../../router'
import { forEach, isEmpty, has, startsWith, reject } from 'lodash-es'
import sidebarItem from './SidebarItem.vue'
import { useSettingStore } from '../../store/modules/setting'
import { useRouteStore } from '@/store/modules/route'
import { storeToRefs } from 'pinia'
import type { LocalRouteParams } from '#/route'
import { useDark } from '@vueuse/core'

defineProps({
  menuMode: {
    type: String,
    default: 'vertical',
  },
})

const settingStore = useSettingStore()
const routeStore = useRouteStore()
const { isMenuCollapse, sideColor } = storeToRefs(settingStore)
const { currentTag } = storeToRefs(routeStore)

const isDark = useDark()

const getSideColor = computed(() => {
  return isDark.value ? '' : sideColor.value
})

// 递归循坏路由

const recursionRoutes = (routes: LocalRouteParams[]) => {
  if (isEmpty(routes)) {
    return []
  }
  forEach(routes, route => {
    if (!has(route, 'children')) {
      route.children = []
    }
    delete route.component
    if (!route.meta.showInMenu) {
      routes = reject(routes, item => item === route)
      console.log('循环', routes)
    }
    if (!isEmpty(route.children)) {
      forEach(route.children, child => {
        // fixed: 当侧边栏重新渲染时，children里面的path会一直拼接，做一层判断
        child.path = startsWith(child.path, '/')
          ? child.path
          : `${route.path}/${child.path}`
        if (!child.meta.showInMenu) {
          route.children = reject(route.children, item => item === child)
        }
      })
      recursionRoutes(route.children)
    }
  })
  return routes
}

const menus = recursionRoutes(routeData)
</script>

<template>
  <el-menu
    :collapse="isMenuCollapse"
    :background-color="getSideColor"
    :default-active="currentTag.path"
    :mode="menuMode"
  >
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

.el-menu--horizontal {
  border-bottom: 0;
}
</style>
