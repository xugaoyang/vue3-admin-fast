<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'

const loginFormRef = ref(null)
const loginForm = reactive({
  username: '',
  password: '',
})

const rules = reactive({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})
const login = Ele => {
  if (!Ele) return
  Ele.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <video
    class="login-video"
    muted
    autoplay="true"
    loop="true"
    src="../assets/videos/loginBg.mp4"
  ></video>
  <div class="login-wrapper">
    <div class="flex justify-around">
      <img src="../assets/vue.svg" class="logo" alt="logo" />
      <h2 class="login-title">VUE3-ADMIN-FAST</h2>
    </div>
    <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
      <el-form-item prop="username">
        <el-input
          :prefix-icon="User"
          v-model="loginForm.username"
          placeholder="用户名:admin"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          :prefix-icon="Lock"
          type="password"
          v-model="loginForm.password"
          placeholder="密码:123456"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" @click="login(loginFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-video {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.login-wrapper {
  position: absolute;
  top: 50%;
  right: 15%;
  z-index: 1;
  padding: 30px;
  box-sizing: border-box;
  width: 400px;
  height: 300px;
  background: rgb(255 255 255 / 20%);
  border-radius: 10px;
  transform: translateY(-50%);
  backdrop-filter: blur(20px);

  .login-title {
    color: #a8abb2;
  }

  :deep(.el-form-item) {
    margin-bottom: 25px;
  }

  :deep(.el-input__wrapper) {
    background-color: transparent;
  }

  :deep(.el-button) {
    color: #fff;
    background-color: rgb(255 255 255 / 20%);
  }
}
</style>
