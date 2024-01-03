<script setup lang="ts"></script>

<template>
  <div p-10px>
    <h3 text-20px>属性化</h3>
    <el-divider />
    <div class="m-2 rounded text-teal-400">简化后</div>
    <div m-2 rounded text-teal-400>简化后</div>
    <h3 text-20px>前缀组</h3>
    <el-divider />
    <div class="hover:bg-gray-400 hover:font-medium font-light font-mono">
      简化前
    </div>
    <div class="hover:bg-gray-400 font-(medium light mono)">简化后</div>
    <h3 text-20px>快捷方式</h3>
    <el-divider />
    <div>
      <span btn mr-10px>按钮</span>
      <span btn-blue>动态快捷方式</span>
    </div>
    <h3 text-20px>指令</h3>
    <el-divider />
    <div>
      <button text-green-500 rounded hover:text-lg shadow-md>属性化按钮</button>
      <span mr-10px></span>
      <button class="btn-directives">指令按钮</button>
    </div>
    <h3 text-20px>图标集成</h3>
    <el-divider />
    <div class="flex items-center gap-x-4 text-30px p-2">
      <span class="i-mdi-alarm text-orange-400"></span>
      <span class="i-mdi:emoticon-poop-outline text-orange-400"></span>
      <span class="i-mdi:account-cowboy-hat-outline text-green-500"></span>
    </div>
  </div>
</template>

<style lang="scss">
.btn-directives {
  @apply text-green-500 rounded hover:text-lg shadow-md;
}
</style>
