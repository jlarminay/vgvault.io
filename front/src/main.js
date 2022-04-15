import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import { makeServer } from '../mirage/server'

const env = import.meta.env

if (env.MODE === 'development') {
  console.info('Mirage server is running')
  makeServer()
}

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
