import WorkAdd from "../components/WorkAdd.vue"
import WorkPage from "../components/WorkPage.vue"
export const WorkPageroutes =[
{
    path: "/workPage",
    name: "WorkPage",
    component: WorkPage,
   
   
},
{
    path: '/workPage/workAdd',
    name: "WorkAdd",
    component: WorkAdd,
},
]

