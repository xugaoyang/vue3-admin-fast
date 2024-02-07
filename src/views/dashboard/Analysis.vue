<script setup lang="ts">
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'

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
      <el-card flex-grow :body-style="{ padding: '10px' }">
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
      <el-card flex-grow :body-style="{ padding: '10px' }">
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
      <el-card flex-grow :body-style="{ padding: '10px' }">
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
      <el-card flex-grow :body-style="{ padding: '10px' }">
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

    <div flex items-center gap-x-4 mt-10px>
      <el-card
        flex-grow
        :body-style="{ padding: '10px', height: '230px' }"
      ></el-card>
      <el-card
        flex-grow
        :body-style="{ padding: '10px', height: '230px' }"
      ></el-card>
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
