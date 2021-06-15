import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

const myVueApp = createApp(App).use(store)
myVueApp.use(store)
myVueApp.use(router)
myVueApp.mount('#app')
