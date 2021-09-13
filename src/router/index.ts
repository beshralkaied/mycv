import { createWebHistory, createRouter } from "vue-router";

import About from "../components/About.vue";
import Home from "../components/Home.vue";
import Website from "../components/Website.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/about",
        name: "About",
        component: About,
    },

    {
        path: "/website",
        name: "Website",
        component: Website,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;