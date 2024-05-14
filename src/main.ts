import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'

axios.defaults.withCredentials = true




const app = createApp(App)

app.prototype.$store = store

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus).use(router).use(store).mount('#app')
