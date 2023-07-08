import { createApp } from 'vue'
import { router } from './router'
import store from './store'
import 'virtual:windi.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import App from './App.vue'
import 'yx-css-demo/dist/index.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
