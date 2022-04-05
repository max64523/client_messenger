import { Route, Routes} from 'react-router-dom';
import {Navigate} from 'react-router';
import Registration from '../components/pages/registration/registration';
import Authorization from '../components/pages/authorization/authorization';

function GuestRouter(props) {
    return ( 
        <Routes>
            <Route
                path='*' 
                element={<Navigate to='authorization'/>}
            />
            <Route 
                path="registration" 
                element={<Registration setIsAuth={props.setIsAuth}/>} 
            />
            <Route 
                path="authorization" 
                element={<Authorization setIsAuth={props.setIsAuth}/>} 
            />
        </Routes>
     );
}

export default GuestRouter;