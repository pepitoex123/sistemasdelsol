import Logo from "./../media/headerlogo.png";
import {BiUserCircle,BiStore,BiCart,BiHome} from "react-icons/bi";
import {Link} from "react-router-dom";


const Header = () => {
    return(
        <header className="header">
            <img src={Logo} alt="Droguería Sistemas Del Sol" className="header_logo"/>
            <nav>
                <ul>
                    <Link to="/dashboard" style={{color: 'inherit', textDecoration: 'inherit'}}><li><BiHome/>Inicio</li></Link>
                    <Link to="/dashboard/store" style={{ color: 'inherit', textDecoration: 'inherit'}}><li><BiStore/>Productos</li></Link>
                    <li><BiCart/>Carrito</li>
                    <li><BiUserCircle/>Cuenta</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;