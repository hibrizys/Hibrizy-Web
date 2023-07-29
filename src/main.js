import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar])

import './assets/css/custom.css'
import './assets/css/plugins.css'
import './assets/css/style.css'

// import "./assets/js/index.js";
// import "./assets/js/index2.js";

const app = createApp(App)

app.use(router)
app.mount('#app')
