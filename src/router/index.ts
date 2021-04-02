import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
