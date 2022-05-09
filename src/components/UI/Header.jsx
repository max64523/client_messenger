import { Link } from "react-router-dom";

function Header({isAuth, logout}) {
    return ( 
        <header className="header">
            <div className="header-logo">logo</div>
            <nav className="header-navbar">
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
                    <Link onClick={logout} to="authorization">Exit</Link>
                </>
                }
            </nav>
        </header>
    );
}       

export default Header;