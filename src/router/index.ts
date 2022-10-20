import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/Home.vue';

// const repos = () => import('@/views/Repos.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomeVue
        },
        {
            path: '/repos',
            component: () => import('@/views/Repos.vue') 
        },
        {
            path: '/tools',
            component: () => import('@/views/Tools.vue') 
        },
        {
            path: "/:catchAll(.*)",
            redirect: '/home'
        }
    ]
})

export default router;