import { useContext } from 'react';
import {NavLink, useHistory} from 'react-router-dom'; 
import { Squash as Hamburger } from 'hamburger-react';
import AuthContext from '../../contexts/AuthContext';

const Nav = () => {
    const [auth, setAuth ] = useContext(AuthContext);
    const history = useHistory();

    const logout = () => {
        setAuth(null);
        history.push("/login/");
    }


    return (
        <>
            <label htmlFor="hamburger-menu" className="nav__label"><Hamburger className="nav__hamburger" color="#FEFFFF" size={22} /></label>
            <input type="checkbox" id="hamburger-menu" className="nav__input" />
          
            <nav className="nav">
                <NavLink className="nav__link nav__link--hover" activeClassName="nav__link--active" to="/" exact={true}>
                    Home
                </NavLink>
                <NavLink className="nav__link nav__link--hover" activeClassName="nav__link--active" to="/results/">
                    Results
                </NavLink>
                <NavLink className="nav__link nav__link--hover" activeClassName="nav__link--active" to="/contact/">
                    Contact
                </NavLink>
                {auth ? (
                    <>
                        <NavLink className="nav__link nav__link--hover" activeClassName="nav__link--active" to="/enquiryadmin/">Enquiries</NavLink>   
                        <NavLink className="nav__link nav__link--hover" activeClassName="nav__link--active" to="/inbox/">Inbox</NavLink>  
                        <NavLink className="nav__link nav__link--hover" activeClassName="nav__link--active" to="/establishment/">Establishments</NavLink> 
                        <div className="nav__logout-wrapper"><button className="nav__logout" onClick={logout}>Log out</button></div>
                    </>
                ) : (
                    <NavLink className="nav__link nav__link--hover" activeClassName="nav__link--active" to="/login/">
                        Login
                    </NavLink>
                )}
            </nav>
        </>
    )
}

export default Nav;