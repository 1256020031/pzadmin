
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component:() => import('../views/layout/index.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router