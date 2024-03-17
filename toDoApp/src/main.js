import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import baseCard from './components/baseCard.vue'

//createApp(App).mount('#app')
const app = createApp(App)

app.component(
    'baseCard',baseCard
)

app.mount('#app')
