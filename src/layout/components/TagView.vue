<script setup lang="ts">
import { useRouteStore } from '../../store/modules/route'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
import { find, findIndex, slice } from 'lodash-es'
import type { TagParams } from '#/tag'

const el: HTMLElement | null = document.querySelector(
  '.layout-content-with-tagview',
)
const { toggle } = useFullscreen(el)

const router = useRouter()
const routeStore = useRouteStore()
const { tags, currentTag } = storeToRefs(routeStore)
const tabClick = (tag: any) => {
  router.push(tag.props.name)
}
const tabClose = (fullPath: string) => {
  const closeTag = JSON.parse(
    JSON.stringify(find(tags.value, ['fullPath', fullPath])),
  )
  routeStore.deleteTag(closeTag)
}

/**
 * @desscription 关闭标签操作
 * @param type {string} left/right/all/others
 */
const tabCloseFn = (type: string) => {
  const currentIndex = findIndex(tags.value, [
    'fullPath',
    currentTag.value.fullPath,
  ])
  console.log(currentIndex)
  let calcTags = null
  switch (type) {
    case 'left':
      calcTags = slice(tags.value, currentIndex, tags.value.length)
      routeStore.changeTags(calcTags)
      break
    case 'right':
      calcTags = slice(tags.value, 0, currentIndex + 1)
      routeStore.changeTags(calcTags)
      break
    case 'all':
      routeStore.changeTags([])
      break
    case 'others':
      routeStore.changeTags([currentTag.value])
      break
    default:
      console.log('nothing delete')
  }
}
</script>

<template>
  <div class="tabs-box">
    <div class="tabs-menu">
      <el-tabs
        v-model="currentTag.fullPath"
        type="card"
        @tab-click="tabClick"
        @tab-remove="tabClose"
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
      <div class="extend-btns flex items-center">
        <span
          class="i-mdi:fullscreen text-24px pr-5px cursor-pointer"
          @click="toggle"
        ></span>
        <el-dropdown @command="tabCloseFn">
          <span
            class="i-mdi:chevron-down text-28px pr-10px cursor-pointer drop-commands"
          ></span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="others">关闭其他</el-dropdown-item>
              <el-dropdown-item command="left">关闭左侧 </el-dropdown-item>
              <el-dropdown-item command="right">关闭右侧</el-dropdown-item>
              <el-dropdown-item command="all">关闭全部</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs-box {
  background-color: var(--el-bg-color);

  .tabs-menu {
    position: relative;
    width: 100%;

    .extend-btns {
      position: absolute;
      top: 8px;
      right: 0;
      display: flex;

      :hover .drop-commands {
        color: var(--el-color-primary);
      }
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
</style>
