import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
// element-plus 核心库
import elementPlus from 'element-plus'
// element-plus style模块
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)

app.use(router).use(elementPlus).mount('#app')
