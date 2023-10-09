import { createApp } from "vue"
import "./assets/styles.css"
import App from "./App.vue"

// CALL PINIA
import { createPinia } from "pinia"
// INIT PINIA
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.mount("#app")
