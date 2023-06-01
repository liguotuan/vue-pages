import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../view/home/index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path:'/home', component: Home }
    ]
})

export default router;