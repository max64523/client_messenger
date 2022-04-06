import { Link } from "react-router-dom";
import Router from "../../router/Router";
import {Context} from "../../Context";
import {useState} from "react";

function Layout(props) {
    const [isAuth,setIsAuth] = useState(false);

    return ( 
    <div className="laout">
        <Context.Provider value={{isAuth, setIsAuth}}>
        <header className="guest__header">
            <div className="guest__header-logo"><Link to="authorization">logo</Link></div>
            <nav className="guest__header-navbar">
                {!isAuth
                 ? 
                <>
                    <Link to="authorization">Sign in</Link> 
                    <Link to="registration">Create account</Link>
                </> 
                :
                <>
                    <Link to="dialogs">Dialogs</Link>
                    <Link to="search">Search</Link>
                    <Link onClick={()=>setIsAuth(false)} to="authorization">Exit</Link>
                </>
                }
            </nav>
        </header>
            <Router/>
        </Context.Provider>
    </div>
    );
}

export default Layout;