<script setup lang="ts">
import { FullScreen, ArrowDown } from '@element-plus/icons-vue'
import { useRouteStore } from '../../store/modules/route'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
import { find } from 'lodash-es'

const el: HTMLElement | null = document.querySelector(
  '.layout-content-with-tagview',
)
const { toggle } = useFullscreen(el)

const router = useRouter()
const routeStore = useRouteStore()
const { tags, currentTag } = storeToRefs(routeStore)
const tagClick = (tag: any) => {
  router.push(tag.props.name)
}
const tagClose = (tag: string) => {
  console.log(tags, tags.value)
  const closeTag = find(tags.value, ['fullPath', tag])
  routeStore.deleteTag(closeTag)
}
</script>

<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs
        v-model="currentTag.fullPath"
        type="card"
        @tab-click="tagClick"
        @tab-remove="tagClose"
      >
        <el-tab-pane
          v-for="tag in tags"
          :key="tag.fullPath"
          :label="tag.showName"
          :name="tag.fullPath"
          :closable="tag.showName !== 'welcome'"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs-box {
  background-color: var(--el-bg-color);

  .tabs-menu {
    position: relative;
    width: 100%;

    .el-dropdown {
      position: absolute;
      top: 8px;
      right: 13px;
    }

    :deep(.el-tabs) {
      .el-tabs__header {
        padding: 0 10px;
        margin: 0;
        height: 40px;
        box-sizing: border-box;

        .el-tabs__nav-wrap {
          position: absolute;
          width: calc(100% - 110px);

          .el-tabs__nav {
            display: flex;
            border: none;

            .el-tabs__item {
              display: flex;
              justify-content: center;
              align-items: center;
              color: #afafaf;
              border: none;

              .tabs-icon {
                margin: 1.5px 4px 0 0;
                font-size: 15px;
              }

              .is-icon-close {
                margin-top: 1px;
              }

              &.is-active {
                color: var(--el-color-primary);

                &::before {
                  position: absolute;
                  bottom: 0;
                  width: 100%;
                  height: 0;
                  content: '';
                  border-bottom: 2px solid var(--el-color-primary) !important;
                }
              }
            }
          }
        }
      }
    }
  }
}

.extend-btns {
  position: relative;
  right: 0;
  display: flex;

  .el-icon {
    width: 30px;
    height: 30px;
    line-height: 24px;
    border-left: 1px solid #ccc;
  }
}
</style>
