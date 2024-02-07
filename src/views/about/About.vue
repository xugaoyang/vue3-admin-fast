<script setup lang="ts">
import config from '../../../package.json'
const projectInfo = {
  version: config.version,
  name: config.name,
  推荐node: config.engines.node,
  推荐pnpm: config.engines.pnpm,
  github地址: 'https://github.com/xugaoyang/vue3-admin-fast',
  预览地址: config.homepage,
}
</script>

<template>
  <div class="h-full w-full p-10px box-border">
    <el-card :body-style="{ padding: '10px' }">
      vue3-admin 是一款开源免费且开箱即用的中后台管理系统模版。完全采用
      ECMAScript 模块（ESM）规范来编写和组织代码，使用了最新的
      Vue3、Vite、Element-Plus、TypeScript、Pinia、unocss 等主流技术开发。
    </el-card>
    <el-card mt-10px :body-style="{ padding: '10px' }">
      <template #header>
        <div class="card-header">
          <span>项目信息</span>
        </div>
      </template>
      <el-descriptions class="margin-top" :column="3" border>
        <el-descriptions-item
          v-for="(val, key, index) in projectInfo"
          :key="index"
        >
          <template #label>
            <div class="cell-item">{{ key }}</div>
          </template>
          {{ val }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card mt-10px :body-style="{ padding: '10px' }">
      <template #header>
        <div class="card-header">
          <span>生产依赖</span>
        </div>
      </template>
      <el-descriptions class="margin-top" :column="3" border>
        <el-descriptions-item
          v-for="(val, key, index) in config.dependencies"
          :key="index"
        >
          <template #label>
            <div class="cell-item">{{ key }}</div>
          </template>
          {{ val }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-card mt-10px mb-10px :body-style="{ padding: '10px' }">
      <template #header>
        <div class="card-header">
          <span>开发依赖</span>
        </div>
      </template>
      <el-descriptions class="margin-top" :column="3" border>
        <el-descriptions-item
          v-for="(val, key, index) in config.devDependencies"
          :key="index"
        >
          <template #label>
            <div class="cell-item">{{ key }}</div>
          </template>
          {{ val }}
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<style lang="scss"></style>
