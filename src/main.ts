import {createApp} from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import './style.css'
import App from './App.vue'
import {QueryClient, VueQueryPlugin} from '@tanstack/vue-query'
import {createPinia} from 'pinia'
import {i18n} from "./i18n/i18n.ts";

const pinia = createPinia()

const queryClient = new QueryClient()
const app = createApp(App)
app.use(VueQueryPlugin, {queryClient}) // faqat queryClient'ni uzatyapmiz
app.use(pinia)
app.use(i18n)
app.mount('#app')

