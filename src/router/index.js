import Index from "../components/index"
import Details from "../components/detail"
import Pin from "../components/pinlun"
import Shou from "../components/shou"
let ooo=[
    {
        path:"/index",
        component:Index
    },
    {
        path:"/detail",
        component:Details
    },
    {
        path:"/pin",
        component:Pin
    },
    {
        path:"/shou",
        component:Shou
    },
    {
        path:"*",
        redirect:"/index"
    }
]

export default ooo