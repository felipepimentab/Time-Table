import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'

const myVueApp = createApp(App)
//.use(store)
.use(router)

myVueApp.mount('#app')
