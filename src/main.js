import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import installRouter from './plugins/router'
import api from './plugins/api'
const app = createApp(App)
installRouter(app)
installElementPlus(app)
app.config.globalProperties.$api = api
app.mount('#app')