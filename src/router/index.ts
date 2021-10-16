import { createWebHistory, createRouter } from "vue-router";

import About from "../components/About.vue";
import Home from "../components/Home.vue";
import Website from "../components/Website.vue"
import Form from "../components/Form.vue"
import { WorkPageroutes } from "./WorkPageRoutes"
import { FamilyPageroutes } from "./FamilyPageRoutes"
import { ParsonalPageroutes } from "./PersonalPageRoutes"

import Edit from "../components/Edit.vue"

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

    {
        path: "/form",
        name: "Form",
        component: Form,
    },

   
    ...ParsonalPageroutes,
    ...WorkPageroutes,
    ...FamilyPageroutes,

   





];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;