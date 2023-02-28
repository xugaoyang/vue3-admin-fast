<script setup lang="ts">
import { FullScreen, ArrowDown } from '@element-plus/icons-vue'
import { useRouteStore } from '../../store/modules/route'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import type { TagParams } from '#/tag'
import { useFullscreen } from '@vueuse/core'

const el: HTMLElement | null = document.querySelector(
  '.layout-content-with-tagview',
)
const { toggle } = useFullscreen(el)

const router = useRouter()
const routeStore = useRouteStore()
const { tags, currentTag } = storeToRefs(routeStore)
const tagClick = (tag: TagParams) => {
  router.push(tag.fullPath)
}
const tagClose = (tag: TagParams) => {
  routeStore.deleteTag(tag)
}
</script>

<template>
  <div class="flex items-center justify-between">
    <el-scrollbar>
      <el-tag
        v-for="tag in tags"
        :key="tag"
        class="mx-1 cursor-pointer"
        closable
        :type="currentTag.fullPath === tag.fullPath ? '' : 'info'"
        @click="tagClick(tag)"
        @close="tagClose(tag)"
      >
        {{ tag.showName }}
      </el-tag>
    </el-scrollbar>
    <div class="extend-btns">
      <el-icon class="cursor-pointer" @click="toggle"><FullScreen /></el-icon>
      <el-icon class="cursor-pointer"><ArrowDown /></el-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-scrollbar__view) {
  display: flex;
}

.extend-btns {
  position: relative;
  right: 0;
  display: flex;

  .el-icon {
    width: 30px;
    height: 26px;
    line-height: 24px;
    border-left: 1px solid #ccc;
  }
}
</style>
