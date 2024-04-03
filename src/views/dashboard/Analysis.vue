<script setup lang="ts">
import { useTransition } from '@vueuse/core'
import avatarUrl from '@/assets/svg/avatar.svg'
import AniWaves from '@/components/AniWaves.vue'

const router = useRouter()
const visitNum = ref(0)
const visitValue = useTransition(visitNum, {
  duration: 1500,
})
visitNum.value = 12345

const downloadNum = ref(0)
const downloadValue = useTransition(downloadNum, {
  duration: 1500,
})
downloadNum.value = 9876

const turnoverNum = ref(0)
const turnoverValue = useTransition(turnoverNum, {
  duration: 1500,
})
turnoverNum.value = 45678

const turnoverQty = ref(0)
const turnoverQtyValue = useTransition(turnoverQty, {
  duration: 1500,
})
turnoverQty.value = 5678

const fastVistList = ref([
  {
    label: '欢迎页',
    icon: 'i-mdi:home',
    iconColor: 'text-green-500',
    path: '/home/welcome',
    bgColor: 'lightgreen',
  },
  {
    label: 'element',
    icon: 'i-mdi:alpha-e-box',
    iconColor: 'text-blue-500',
    path: '/feature/element-plus',
    bgColor: 'lightblue',
  },
  {
    label: 'unocss',
    icon: 'i-mdi:language-css3',
    iconColor: 'text-pink-500',
    path: '/feature/unocss',
    bgColor: 'lightpink',
  },
  {
    label: '关于',
    icon: 'i-mdi:about',
    iconColor: 'text-purple-500',
    path: '/project/about',
    bgColor: 'lightgray',
  },
])
const visitPage = (url: string) => {
  router.push(url)
}

const changeLog = ref([
  {
    date: '2023-06-10 12:38',
    content: '优化样式，测试npm私库',
  },
  {
    date: '2023-05-10 17:38',
    content: '测试github action，提交代码构建发布更新',
  },
  {
    date: '2023-04-28 11:38',
    content: '加个酷炫的登录页面',
  },
  {
    date: '2023-03-10 16:38',
    content: '添加多种布局，支持各种自定义颜色及主题',
  },
  {
    date: '2023-02-03 15:30',
    content: '开始初始化项目，为框架舔砖加瓦',
  },
])
</script>

<template>
  <div class="w-full h-full p-10px box-border">
    <el-card
      bg-gradient-to-r
      from-indigo-400
      via-purple-400
      to-pink-400
      :body-style="{ padding: '10px' }"
    >
      <p font-bold text-white>欢迎, admin, 今天又是充满活力的一天!</p>
      <p text-gray-100>
        <span flex items-center
          >今日多云转晴，<i
            class="i-mdi:weather-partly-cloudy text-orange-400 text-20px inline-block mr-5px"
          ></i
          >23℃</span
        >
      </p>
    </el-card>
    <div flex items-center gap-x-4 mt-10px>
      <el-card flex-1 :body-style="{ padding: '10px' }">
        <el-statistic :value="visitValue">
          <template #title>
            <div flex items-center text-18px>访问量</div>
          </template>
          <template #suffix>
            <i
              class="i-mdi:account-multiple text-orange-400 text-40px inline-block text-right"
            ></i>
          </template>
        </el-statistic>
      </el-card>
      <el-card flex-1 :body-style="{ padding: '10px' }">
        <el-statistic :value="downloadValue">
          <template #title>
            <div flex items-center text-18px>下载量</div>
          </template>
          <template #suffix>
            <i
              class="i-mdi:cloud-download text-blue-400 text-40px inline-block text-right"
            ></i>
          </template>
        </el-statistic>
      </el-card>
      <el-card flex-1 :body-style="{ padding: '10px' }">
        <el-statistic :value="turnoverValue">
          <template #title>
            <div flex items-center text-18px>成交额</div>
          </template>
          <template #suffix>
            <i
              class="i-mdi:cash-100 text-green-500 text-40px inline-block text-right"
            ></i> </template
        ></el-statistic>
      </el-card>
      <el-card flex-1 :body-style="{ padding: '10px' }">
        <el-statistic :value="turnoverQtyValue">
          <template #title>
            <div flex items-center text-18px>成交量</div>
          </template>
          <template #suffix>
            <i
              class="i-mdi:chart-line text-purple-600 text-40px inline-block text-right"
            ></i> </template
        ></el-statistic>
      </el-card>
    </div>
    <el-card
      mt-10px
      flex-grow
      :body-style="{ padding: '0px', height: '250px' }"
    >
      <ani-waves></ani-waves>
    </el-card>
    <div flex items-center gap-x-4 mt-10px>
      <el-card flex-1 :body-style="{ padding: '10px', height: '250px' }">
        <template #header>
          <span>快捷入口</span>
        </template>
        <div flex flex-wrap>
          <div
            v-for="item in fastVistList"
            :key="item.label"
            w-100px
            h-100px
            cursor-pointer
            m-20px
            rounded-10px
            border-1px
            border-solid
            border-gray-200
            flex
            justify-center
            items-center
            flex-col
            @click="visitPage(item.path)"
          >
            <i
              :class="[item.icon, item.iconColor]"
              inline-block
              text-40px
              mb-10px
            ></i>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </el-card>
      <el-card
        flex-1
        :body-style="{ padding: '10px', height: '250px', overflow: 'auto' }"
      >
        <template #header>
          <span>最近动态</span>
        </template>
        <div v-for="item in changeLog" :key="item.date" flex items-center>
          <el-avatar class="mr-5px" :size="26" :src="avatarUrl" />
          <p flex justify-between style="width: calc(100% - 30px)">
            <span>{{ item.content }}</span
            ><span>{{ item.date }}</span>
          </p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-statistic__content) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
