import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './tailwind.css'
import App from './App.vue'
import router from './router'
import { createPersistPlugin } from 'pinia-persist'


import './assets/main.css'

const app = createApp(App)

app.use(createPinia().use(createPersistPlugin()))
app.use(router)

app.mount('#app')
