<script setup lang="ts">
import { computed } from 'vue'
import { useSystemStore } from '../../store/modules/system'
import { useSettingStore } from '../../store/modules/setting'
import sidebar from './SidebarMenu.vue'
import { Setting, Sunny, Moon, Fold, Expand } from '@element-plus/icons-vue'
import appLogo from './AppLogo.vue'
import setting from './Setting.vue'
import breadcrumbNav from './BreadCrumbNav.vue'
import { useDark, useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import avatarUrl from '@/assets/svg/avatar.svg'
import { useRouter } from 'vue-router'

const router = useRouter()
const mainStore = useSystemStore()
const settingStore = useSettingStore()
const { isMenuCollapse, naviColor, sideColor, layoutHasSide } =
  storeToRefs(settingStore)
const isDark = useDark({
  onChanged(dark: boolean) {
    console.log(dark)
    const htmlEle = document.querySelector('html')
    if (dark) {
      mainStore.changeTheme('dark')
      htmlEle?.setAttribute('class', 'dark')
    } else {
      mainStore.changeTheme('light')
      htmlEle?.setAttribute('class', 'light')
    }
  },
})
const toggleDark = useToggle(isDark)

const getNaviColor = () => {
  return isDark.value ? '' : naviColor.value
}
const getLogoColor = () => {
  return layoutHasSide.value ? sideColor.value : getNaviColor()
}
const currentTheme = computed(() => (mainStore.theme === 'dark' ? true : false))
const logoWidth = computed(() => settingStore.getSideWidth)
const openSettingPanel = () => {
  settingStore.changeSettingPanelStatus(true)
}

const localeChange = (val: string) => {
  mainStore.changeLocale(val)
}

const changeMenuCollapse = () => {
  console.log(isMenuCollapse.value)
  settingStore.changeMenuCollapse(!isMenuCollapse.value)
  settingStore.changeSideWidth(isMenuCollapse.value ? '64px' : '200px')
}
</script>

<template>
  <div
    class="flex justify-between items-center"
    :style="{ backgroundColor: getNaviColor(), height: '50px' }"
  >
    <div class="flex items-center">
      <app-logo
        :style="`width: ${logoWidth};backgroundColor:${getLogoColor()}`"
      />
      <div class="flex items-center" v-if="layoutHasSide">
        <el-icon
          class="cursor-pointer pl-5px pr-5px"
          @click="changeMenuCollapse()"
          ><Fold v-if="!isMenuCollapse" /> <Expand v-else
        /></el-icon>
        <breadcrumbNav />
      </div>
      <sidebar :menuMode="'horizontal'" v-else></sidebar>
    </div>
    <div class="header-action flex justify-around items-center">
      <el-switch
        @change="toggleDark"
        v-model="currentTheme"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
        mr-10px
      />
      <el-dropdown mr-10px @command="localeChange">
        <span>
          <img src="../../assets/i18n.svg" alt="" style="height: 26px" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zhCn">中文</el-dropdown-item>
            <el-dropdown-item command="en">en</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span class="flex items-center">
        <span
          class="i-mdi:cog-outline text-24px cursor-pointer mr-10px"
          @click="openSettingPanel()"
        ></span>
        <el-avatar class="mr-5px" :size="26" :src="avatarUrl" />
        <span mr-10px>admin</span>
        <span
          class="i-mdi:account-arrow-right text-24px cursor-pointer mr-10px"
          @click="router.push('/login')"
        ></span>
      </span>
    </div>
    <setting />
  </div>
</template>

<style scoped lang="scss">
.header-action {
  min-width: 200px;
}
</style>
