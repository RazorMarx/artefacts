import { createApp } from 'vue'
import './style.css'
import 'vue-fullpage.js/dist/style.css'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'

createApp(App)
.use(VueFullPage)
.mount('#app')
