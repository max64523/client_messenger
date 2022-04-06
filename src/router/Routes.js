
import Registration from "../components/pages/registration/registration";
import Authorization from "../components/pages/authorization/authorization";
import  Search  from "../components/pages/search/search";
import Dialogs from "../components/pages/dialogs/dialogs";
import UserPage from "../components/pages/userPage/userPage";
import { Navigate } from "react-router-dom";

export const publicRouter = [
    {path:'*', component:<Navigate to='/authorization'/>},
    {path:"/authorization", component:<Authorization/> },
    {path:"/registration", component:<Registration/>},
]

export const privateRouter = [
    {path:'*', component:<Navigate to='/userpage'/>},
    {path:"/dialogs", component:<Dialogs/>},
    {path:"/userpage", component:<UserPage/>},
    {path:"/search", component:<Search/>},
]