import axios from 'axios'

const instance = axios.create({
  baseUrl: 'http://127.0.0.1:5174', //请求后端数据的基本地址，自定义
  timeout: 2000, //请求超时设置，单位ms
})

export default instance
