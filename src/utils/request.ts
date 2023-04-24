import axios from 'axios'

const instance = axios.create({
  baseUrl: 'http://localhost:8080', //请求后端数据的基本地址，自定义
  timeout: 2000, //请求超时设置，单位ms
})

//导出我们建立的axios实例模块，ES6 export用法
export default instance
