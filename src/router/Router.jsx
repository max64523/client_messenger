import {publicRouter} from "../router/Routes";
import {privateRouter} from "../router/Routes";
import { Routes, Route} from "react-router-dom";

function Router(props) {
    return ( 
        <Routes>
            {props.isAuth 
                ? 
                publicRouter.map(route => console.log(route))
                :
                privateRouter.map(route =>{<Route path={route.path} element={route.component}/>})    
            }
        </Routes> 
    );
}

export default Router;