import {publicRouter} from "../router/Routes";
import {privateRouter} from "../router/Routes";
import { Routes, Route} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../Context";

function Router(props) {
    const {isAuth} = useContext(Context)
    return ( 
        <Routes>
            {!isAuth 
                ? 
                publicRouter.map((route,index) => {return <Route path={route.path} element={route.component} key={index}/>})
                :
                privateRouter.map((route,index) => {return <Route path={route.path} element={route.component} key={index}/>})    
            }
        </Routes> 
    );
}

export default Router;