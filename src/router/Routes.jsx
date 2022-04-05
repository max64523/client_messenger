
import Registration from "../components/pages/registration/registration";
import Autorization from "../components/pages/authorization/authorization";
import  Search  from "../components/pages/search/search";
import Dialogs from "../components/pages/dialogs/dialogs";
import UserPage from "../components/pages/userPage/userPage";

export const publicRouter = [
    {path:"/autorization", component:Autorization },
    {path:"/registration", component:Registration},
]

export const privateRouter = [
    {path:"/dialogs", component:Dialogs},
    {path:"/userpage", component:UserPage},
    {path:"/search", component:Search},
]