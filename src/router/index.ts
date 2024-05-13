import { createRouter, createWebHashHistory } from "vue-router"

import login from "@/views/login/index.vue"

const publicRoutes = [
    {
        path: '/login',
        component: login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: publicRoutes
})


export default router;