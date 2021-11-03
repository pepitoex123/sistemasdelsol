import Logo from "./../media/headerlogo.png";
import {BiUserCircle,BiStore,BiCart} from "react-icons/bi";
import {Link} from "react-router-dom";


const Header = () => {
    return(
        <header className="header">
            <img src={Logo} alt="Droguería Sistemas Del Sol" className="header_logo"/>
            <nav>
                <ul>
                    <li><BiCart/>Cart</li>
                    <li><BiUserCircle/>Account</li>
                    <Link to="/dashboard/store" style={{ color: 'inherit', textDecoration: 'inherit'}}><li><BiStore/>Store</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;