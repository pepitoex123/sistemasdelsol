import Logo from "./../media/headerlogo.png";
import {BiUserCircle,BiStore,BiCart} from "react-icons/bi";


const Header = () => {
    return(
        <header className="header">
            <img src={Logo} alt="Droguería Sistemas Del Sol" className="header_logo"/>
            <nav>
                <ul>
                    <li><BiCart/>Cart</li>
                    <li><BiUserCircle/>Account</li>
                    <li><BiStore/>Store</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;