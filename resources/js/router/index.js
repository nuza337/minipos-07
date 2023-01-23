import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

import Store from "../pages/Store.vue";
import Transection from "../pages/Transection.vue";
import pos from "../pages/Pos.vue";
import Report from "../pages/Report.vue";

export const routes = [
    {
        name:"Storepage",
        path:"/",
        component: Store
    },
    {
        name:"Transectionpage",
        path:"/transection",
        component: Transection
    },
    {
        name:"Pospage",
        path:"/pos",
        component: pos
    },
    {
        name:"Reportpage",
        path:"/report",
        component: Report
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0,0)
    }
});

export default router;