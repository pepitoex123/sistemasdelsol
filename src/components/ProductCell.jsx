import {useState,useContext} from "react";
import HoverText from "./HoverText";
import AnimatedModal from "./AnimatedModal";
import {FaCheck,FaTimes} from "react-icons/fa";
import {BsFillImageFill} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";
import pamiCoberturaChico from "./../media/cobertura-pami-chiquito.png";
import {CartContext} from "../contexts/CartContext";
import { Link } from "react-router-dom";

const ProductCell = ({nombreComercial,laboratorio,monodroga,stock,price,priceDiscount,dto,precioConDescuento,image,pami,id}) => {

    const [isHovering,setIsHovering] = useState(false);

    const {addProductToCart,cart} = useContext(CartContext);

    const [show,setShow] = useState(false);

    const [inputQuantity,setInputQuantity] = useState(0);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const onChange = (event) => {
        console.log(event.target.value);


        // Sanitizing Input!

        if(isNaN(event.target.value) || event.target.value === ""){
            setInputQuantity(0);
        }else{
            setInputQuantity(0 + Number(event.target.value));
        }

        // Time to use CartContext!



        addProductToCart({
            nombreComercial,
            laboratorio,
            monodroga,
            stock,
            price,
            priceDiscount,
            dto,
            precioConDescuento,
            image,
            pami,
            id
        }, (0 + Number(event.target.value)))


    }

    const item = cart.find((item) => item.id === id)

    const quantity = item ? item.quantity : null



    return(
        <>
            <AnimatedModal show={show} handleClose={() => setShow(false)} imgUrl={image} nombreComercial={nombreComercial} pami={pami}/>
            <tr className="product">
                <td data-title="Cantidad">
                    <div className="product_quantity">
                        <input type="text" name="name" value={(quantity ? quantity : inputQuantity)} onChange={onChange}/>
                    </div>
                </td>
                <th scope="row">
                    <BsFillImageFill onClick={() => setShow(true)} className="product_image"/>
                    <span>{nombreComercial}</span>
                    {pami === 1 && (<img className="product_image_pami" src={pamiCoberturaChico} alt="Pami Cobertura Chico"/>)}
                    <Link to={`/dashboard/editproduct/${id}`}>
                        <AiFillEdit className="product_image_edit"/>
                    </Link>
                </th>
                <td data-title="Laboratorio" className="product_laboratorio">{laboratorio}</td>
                <td data-title="Monodroga" className="product_monodroga">{monodroga}</td>
                <td data-title="Stock" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

                    {stock === -1 && (<div className="product_quantity_cancel">{isHovering && (<HoverText text={"El producto no tiene stock!"} stockState={"#EA3C53"}/>)} <FaTimes/>  </div>)}
                    {stock === 0 && (<div className="product_quantity_pending">{isHovering && (<HoverText text={"El producto tendrá stock en poco tiempo!"} stockState={"#FFC30B"}/>)} <FaCheck/>   </div>)}
                    {stock === 1 && (<div className="product_quantity_check">{isHovering && (<HoverText text={"El producto tiene stock!"} stockState={"green"}/>)} <FaCheck/> </div>)}
                </td>
                <td data-title="Su Descuento" data-type="currency">{priceDiscount}</td>
                <td data-title="Precio" data-type="currency">${dto}</td>
                <td data-title="Precio Con Descuento" data-type="currency">${precioConDescuento}</td>
            </tr>
        </>
    )
}

export default ProductCell;