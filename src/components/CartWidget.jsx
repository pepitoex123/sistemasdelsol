import {BiCart} from "react-icons/bi";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext";
import {Link} from "react-router-dom"


const CartWidget = () => {

    const {cart} = useContext(CartContext);




    return(
        <Link to="/dashboard/cartcheckout" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <li className="cartwidget">
                <BiCart/>Carrito
                <div>{cart.reduce((acc,prod) => acc + prod.quantity,0) !== 0 && (cart.reduce((acc,prod) => acc + prod.quantity,0))}</div>
            </li>
        </Link>
    )
}


export default CartWidget;