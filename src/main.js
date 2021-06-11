import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const myVueApp = createApp(App)
myVueApp.use(store)
myVueApp.use(router)
myVueApp.mount('#app')
