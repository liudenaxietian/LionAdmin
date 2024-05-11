import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import router from "./router/index.ts"
import { createPinia } from 'pinia';
import axios from "axios";
import App from './App.vue'

createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app')
