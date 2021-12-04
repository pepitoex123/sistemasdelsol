


const CartCheckoutCell = ({nombreComercial,cantidad}) => {
    return(
        <>
            <tr className="product">
                <td className="container-cart-utility" data-title="Cantidad">
                    <div className="product_quantity">
                        {cantidad}
                    </div>
                </td>
                <th className="container-cart-utility" scope="row">
                    <span>{nombreComercial}</span>
                </th>
            </tr>
        </>
    )
}

export default CartCheckoutCell;