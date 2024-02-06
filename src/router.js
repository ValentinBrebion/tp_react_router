import { createRouter, createWebHashHistory } from 'vue-router'

const AboutPage = () => import('@/pages/AboutPage.vue')
const HomePage = () => import('@/pages/HomePage.vue')
const OneProduct = () => import('@/pages/OneProduct.vue')

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            alias: '/home',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            name: '/product',
            path: '/product/:id',
            component: OneProduct
        },
    ]
})