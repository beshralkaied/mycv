import FamilyAdd from "../components/FamilyAdd.vue"
import FamilyPage from "../components/FamilyPage.vue"
export const FamilyPageroutes = [
    {
        path: "/familyPage",
        name: "FamilyPage",
        component: FamilyPage,


    },
    {
        path: '/familyPage/familyAdd',
        name: "FamilyAdd",
        component: FamilyAdd,

    },
    {
        path: '/familyPage/familyEdit/:id',
        name: "FamilyEdit",
        component: FamilyAdd,
        props: true,
    },
]

