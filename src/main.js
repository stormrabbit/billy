import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import installRouter from './plugins/router'
import axios from './plugins/axios'
const app = createApp(App)
installRouter(app)
installElementPlus(app)
app.config.globalProperties.$axios = axios
app.mount('#app')