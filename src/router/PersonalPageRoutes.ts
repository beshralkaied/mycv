import Add from "../components/Add.vue"
import PersonalPage from "../components/PersonalPage.vue"

export const ParsonalPageroutes = [
    {
        path: "/personalPage",
        name: "PersonalPage",
        component: PersonalPage,
    },
    {
        path: "/personalPage/add",
        name: "Add",
        component: Add,
    },
    {
        path: "/personalPage/edit/:id",
        name: "PersonalEdit",
        component: Add,
        props: true,
    },


]