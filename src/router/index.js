import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Pay from '../views/Pay.vue'
import Policy from '../views/Policy.vue'
import Regulation from '../views/Regulation.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/pay',
        name: 'pay',
        component: Pay
    },
    {
        path: '/policy',
        name: 'policy',
        component: Policy
    },
    {
        path: '/regulation',
        name: 'regulation',
        component: Regulation
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router