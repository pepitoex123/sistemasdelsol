
import CartCheckoutTable from "./CartCheckoutTable";

const CartCheckout = () => {



    return(
        <div className="cartcheckout">
            <h1 className="cartcheckout__title">Su Pedido</h1>
            <CartCheckoutTable/>
            <input className="cartcheckout__submit"  value={"Enviar Pedido"} type="submit"/>
        </div>
    )
}


export default CartCheckout;