import { createApp } from 'vue'
import './assets/main.scss'
import App from './App.vue'
import store from './store/store.js'
import router from './router/router.js'

createApp(App).use(store).use(router).mount('#app')