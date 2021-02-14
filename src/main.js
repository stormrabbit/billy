import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import installRouter from './plugins/router'

const app = createApp(App)
installRouter(app)
installElementPlus(app)
app.mount('#app')