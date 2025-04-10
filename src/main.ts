import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css'
import App from './App.vue'
import {QueryClient, VueQueryPlugin} from '@tanstack/vue-query'

const queryClient = new QueryClient()
const app = createApp(App)
app.use(VueQueryPlugin, {queryClient}) // faqat queryClient'ni uzatyapmiz
app.mount('#app')

