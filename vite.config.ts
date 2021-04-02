import {defineConfig} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js', // 定义vue的别名，如果使用其他的插件，可能会用到别名
            '@': path.resolve(__dirname, '.', 'src'),
        },
    }
})
