<script setup lang="ts">
import { ref } from 'vue'
import { FullScreen, ArrowDown } from '@element-plus/icons-vue'
const tags = ref([
  { name: 'Tag 1', type: 'info' },
  { name: 'Tag 2', type: 'info' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'info' },
  { name: 'Tag 5', type: 'info' },
  { name: 'Tag 6', type: 'info' },
  { name: 'Tag 7', type: 'info' },
  { name: 'Tag 8', type: 'info' },
  { name: 'Tag 9', type: 'info' },
  { name: 'Tag 10', type: 'info' },
  { name: 'Tag 11', type: 'info' },
  { name: 'Tag 12', type: 'info' },
  { name: 'Tag 13', type: 'info' },
  { name: 'Tag 14', type: 'info' },
  { name: 'Tag 15', type: 'info' },
  { name: 'Tag 16', type: 'info' },
  { name: 'Tag 17', type: 'info' },
  { name: 'Tag 18', type: 'info' },
  { name: 'Tag 19', type: 'info' },
  { name: 'Tag 20', type: 'info' },
])
</script>

<template>
  <div class="flex items-center">
    <el-scrollbar>
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        class="mx-1"
        closable
        :type="tag.type"
      >
        {{ tag.name }}
      </el-tag>
    </el-scrollbar>
    <div class="extend-btns">
      <el-icon><FullScreen /></el-icon>
      <el-icon><ArrowDown /></el-icon>
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
