import { Link } from "react-router-dom";
import Router from "../../router/Router";
function Layout(props) {
    return ( 
    <div className="laout">
        <header className="guest__header">
            <div className="guest__header-logo"><Link to="authorization">logo</Link></div>
            <nav className="guest__header-navbar">
                {!props.isAuth
                 ? 
                <>
                    <Link to="authorization">Sign in</Link> 
                    <Link to="registration">Create account</Link>
                </> 
                :
                <Link to="authorization">Exit</Link>}
            </nav>
        </header>
        <Router isAuth={props.isAuth}/>
    </div>
    );
}

export default Layout;