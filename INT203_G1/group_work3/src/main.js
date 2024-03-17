import './assets/main.css'

import { createApp } from 'vue'
import App from './App2.vue'
import TestHeader from './components/TestHeader.vue'

console.log('00 : At main.js , before createApp()')
// จะไม่render จนกว่าmountจะทำงาน

//createApp(App).mount('#app')
const app = createApp(App)

app.component(
    'Header2' , TestHeader
)
app.mount('#app')
// ถ้าคอมเม้นบรรทัดบน app instance ถูกสร้างแต่ยังไม่แสดงเพราะไม่ถูกเรนเดอร์

console.log('At main.js , after createApp()')