import {FaCheck,FaTimes} from "react-icons/fa";

const AddProductForm = () => {
    return(
        <form className="addproductform">
            <label htmlFor="nombreComercial" className="addproductform__label">Nombre Comercial</label>
            <input type="text" id={"nombreComercial"} className="addproductform__text"/>
            <label htmlFor="laboratorio" className="addproductform__label">Laboratorio</label>
            <input type="text" id={"laboratorio"} className="addproductform__text"/>
            <label htmlFor="monodroga" className="addproductform__label">Monodroga</label>
            <input type="text" id={"monodroga"} className={"addproductform__text"}/>
            <label htmlFor="pami" className="addproductform__label">Cobertura Pami</label>
            <div id={"pami"}>
                    <input type="radio" name="pami" id={"nopami"} value={0} className="addproductform__radio"/>
                    <label htmlFor="nopami">Sin Cobertura</label>
                    <input type="radio" name="pami" id={"conpami"} value={1} className="addproductform__radio"/>
                    <label htmlFor="conpami">Con Cobertura</label>
            </div>
            <label htmlFor="stock" className={"addproductform__label"}>Stock</label>
            <div id={"stock"}>
                <input type="radio" name="stock" id={"constock"} value={1} className="addproductform__radio"/>
                <FaCheck className="addproductform__label__constock"/>
                <input type="radio" name="stock" id={"commecistock"} value={0} className="addproductform__radio"/>
                <FaCheck className="addproductform__label__commecistock"/>
                <input type="radio" name="stock" id={"nostock"} value={-1} className="addproductform__radio"/>
                <FaTimes className="addproductform__label__nostock"/>
            </div>
            <label htmlFor="priceDiscount" className="addproductform__label">Su Descuento</label>
            <input type="text" id={"priceDiscount"} name={"priceDiscount"} className="addproductform__text"/>
            <label htmlFor="price" className="addproductform__label">Precio</label>
            <input type="text" id={"price"} name={"price"} className="addproductform__text"/>
            <label htmlFor="priceWithDiscount" className="addproductform__label">Precio Con Descuento</label>
            <input type="text" id={"priceWithDiscount"} name={"priceWithDiscount"} className="addproductform__text"/>
            <input type="submit" value={"Subir Producto"} className="addproductform__submit"/>
        </form>
    )
}


export default AddProductForm;