import {useState} from "react";
import HoverText from "./HoverText";
import AnimatedModal from "./AnimatedModal";
import {FaCheck,FaTimes} from "react-icons/fa"

const ProductCell = ({nombreComercial,laboratorio,monodroga,stock,price,priceDiscount,dto,precioConDescuento,image}) => {

    const [isHovering,setIsHovering] = useState(false);

    const [show,setShow] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };


    return(
        <>
            <AnimatedModal show={show} handleClose={() => setShow(false)} imgUrl={image} nombreComercial={nombreComercial}/>
            <tr className="product">
                <td data-title="Cantidad">
                    <div className="product_quantity">
                        <input type="text" name="name" value={0}/>
                    </div>
                </td>
                <th scope="row" onClick={() => setShow(true)}>{nombreComercial}</th>
                <td data-title="Laboratorio">{laboratorio}</td>
                <td data-title="Monodroga">{monodroga}</td>
                <td data-title="Stock" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

                    {stock === -1 && (<div className="product_quantity_cancel">{isHovering && (<HoverText text={"El producto no tiene stock!"} stockState={"#EA3C53"}/>)} <FaTimes/>  </div>)}
                    {stock === 0 && (<div className="product_quantity_pending">{isHovering && (<HoverText text={"El producto tendrá stock en poco tiempo!"} stockState={"#FFC30B"}/>)} <FaCheck/>   </div>)}
                    {stock === 1 && (<div className="product_quantity_check">{isHovering && (<HoverText text={"El producto tiene stock!"} stockState={"green"}/>)} <FaCheck/> </div>)}
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