import { createApp } from 'vue'
import { createPinia } from 'pinia'
import NaiveUi from "naive-ui"
import AOS from 'aos';

import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './assets/main.css'
import 'aos/dist/aos.css';

const app = createApp(App)

library.add(fas)

app.use(createPinia())
app.use(router)
app.use(NaiveUi)
app.use(AOS.init())


app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
