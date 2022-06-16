import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
// router
import router from './router'

// vuex
import store from './store'

const app = createApp(App)
app.use(store).use(router).mount('#app')
