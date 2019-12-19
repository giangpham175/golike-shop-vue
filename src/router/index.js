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
    routes,
    // move-to-id
    // scrollBehavior: function(to, from, savedPosition) {
    //     if (to.hash) {
    //         return { selector: to.hash }
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // },
})

export default router