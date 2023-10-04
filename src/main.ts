import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'

// CALL PINIA
import { createPinia } from 'pinia'
// INIT PINIA
const pinia = createPinia()
import IconSvg from './components/icons/IconSvg.vue'
const app = createApp(App)
app.use(pinia)
app.component('IconSvg', IconSvg)
app.mount('#app')
