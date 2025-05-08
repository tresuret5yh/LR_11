import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Импорт глобальных стилей (если есть)
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
