import Router from "../../router/Router";
import {Context} from "../../Context";
import {useState, useEffect} from "react";
import axios from "axios";
import Header from "../UI/Header";

function Layout(props) {

    const [isAuth,setIsAuth] = useState(false);

    const logout = () => {
        axios.post("http://localhost:5000/api/logout", 
            {refreshToken:JSON.parse(localStorage.getItem('user')).refreshToken});
        localStorage.clear()
        setIsAuth(false);
    }

    useEffect( () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        
        userData 
            ?
            setIsAuth(userData.user.isActivated)
            : 
            setIsAuth(false)
    }, [])

    return ( 
    <div className="laout">
        <Context.Provider value={{isAuth, setIsAuth}}>
            <Header isAuth={isAuth} logout={logout}/>
            <Router/>
        </Context.Provider>
    </div>
    );
}

export default Layout;