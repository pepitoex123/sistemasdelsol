import {ReactComponent as PlusSvg} from "./../media/svg/plus.svg";
import {ReactComponent as MinusSvg} from "./../media/svg/minus.svg";
import {ReactComponent as CheckSvg} from "./../media/svg/check.svg";
import {ReactComponent as CancelSvg} from "./../media/svg/cancel.svg";

const ProductCell = ({nombreComercial,laboratorio,monodroga,stock,price,priceDiscount,dto,precioConDescuento}) => {
    return(
        <>
            <tr className="product">
                <td data-title="Cantidad">
                    <div className="product_quantity">
                        <button className="product_quantity_minus-btn">
                            <MinusSvg/>
                        </button>
                        <input type="text" name="name" value={0}/>
                        <button className="product_quantity_plus-btn">
                            <PlusSvg/>
                        </button>
                    </div>
                </td>
                <th scope="row">{nombreComercial}</th>
                <td data-title="Laboratorio">{laboratorio}</td>
                <td data-title="Monodroga">{monodroga}</td>
                <td data-title="Stock">
                    {stock === -1 && (<div className="product_quantity_cancel"><CancelSvg/></div>)}
                    {stock === 0 && (<div className="product_quantity_pending"><CheckSvg/></div>)}
                    {stock === 1 && (<div className="product_quantity_check"><CheckSvg/></div>)}
                </td>
                <td data-title="Descuento Público" data-type="currency">${price}</td>
                <td data-title="Su Descuento" data-type="currency">${priceDiscount}</td>
                <td data-title="Precio" data-type="currency">${dto}</td>
                <td data-title="Precio Con Descuento" data-type="currency">${precioConDescuento}</td>
            </tr>
        </>
    )
}

export default ProductCell;