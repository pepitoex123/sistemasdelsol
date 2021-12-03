


const CartCheckoutCell = ({nombreComercial,cantidad}) => {
    return(
        <>
            <tr className="product">
                <td className="" data-title="Cantidad">
                    <div className="product_quantity">
                        {cantidad}
                    </div>
                </td>
                <th scope="row">
                    <span>{nombreComercial}</span>
                </th>
            </tr>
        </>
    )
}

export default CartCheckoutCell;