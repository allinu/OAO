import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '主页'
        }
    },
    {
        path: '/projects',
        name: 'Projects',
        meta: {
            title: '项目'
        },
        component: () =>
            import ('../views/Projects.vue')
    },
    {
        path: '/automation',
        name: 'Automation',
        meta: {
            title: '自动化'
        },
        component: () =>
            import ('../views/Automation.vue')
    },
    {
        path: '/love',
        name: 'Love',
        meta: {
            title: 'LOVE'
        },
        component: () =>
            import ('../views/Love.vue')
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: '关于'
        },
        component: () =>
            import ('../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = "OAO - " + to.matched[0].meta.title;
    next();
});

export default router