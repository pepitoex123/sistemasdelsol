import Logo from "./../media/headerlogo.png";
import {BiUserCircle,BiStore,BiCart,BiHome} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {GiHamburgerMenu} from "react-icons/gi";


const Header = () => {
    const headerRef = useRef(null);

    useEffect(() =>{
        window.addEventListener("scroll",() =>{
            if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
                headerRef.current.classList.add("header_is_fixed");
            }else{
                headerRef.current.classList.remove("header_is_fixed");
            }
            return () =>{
                window.removeEventListener("scroll");
            };
        })
    },[]);



    return(
        <header ref={headerRef} className="header">
            <img src={Logo} alt="Droguería Sistemas Del Sol" className="header_logo"/>
            <nav>
                <ul>
                    <Link to="/dashboard" style={{color: 'inherit', textDecoration: 'inherit'}}><li><BiHome/>Inicio</li></Link>
                    <Link to="/dashboard/store" style={{ color: 'inherit', textDecoration: 'inherit'}}><li><BiStore/>Productos</li></Link>
                    <li><BiCart/>Carrito</li>
                    <li><BiUserCircle/>Cuenta</li>
                    <span className="header_nav_mobile">
                        <GiHamburgerMenu/>
                    </span>
                </ul>
            </nav>
        </header>
    )
}

export default Header;