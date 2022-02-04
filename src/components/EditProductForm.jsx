import {FaCheck, FaTimes} from "react-icons/fa";
import {useState} from "react";


const EditProductForm = ({nombreComercial,laboratorio,monodroga,pami,stock,price,image}) => {

    const [inputSubmit, setInputSubmit] = useState({
        nombreComercial,
        laboratorio,
        monodroga,
        stock,
        price,
        image,
        pami,
    })


    const onChange = (e) => {

        if(e.target.name === "image"){
            setInputSubmit({
                ...inputSubmit,
                image: e.target.files[0]
            })
        }else {
            setInputSubmit({
                ...inputSubmit,
                [e.target.name]: e.target.value
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputSubmit);
    }





    return(
        <form className="editproductform">
            <label htmlFor="nombreComercial" className="editproductform__label">Nombre Comercial</label>
            <input type="text" id={"nombreComercial"} className="editproductform__text" onChange={onChange}/>
            <label htmlFor="laboratorio" className="editproductform__label">Laboratorio</label>
            <input type="text" id={"laboratorio"} className="editproductform__text" onChange={onChange}/>
            <label htmlFor="monodroga" className="editproductform__label">Monodroga</label>
            <input type="text" id={"monodroga"} className={"editproductform__text"} onChange={onChange}/>
            <label htmlFor="pami" className="editproductform__label">Cobertura Pami</label>
            <div id={"pami"}>
                <input type="radio" name="pami" id={"nopami"} value={0} className="editproductform__radio" onChange={onChange}/>
                <label htmlFor="nopami">Sin Cobertura</label>
                <input type="radio" name="pami" id={"conpami"} value={1} className="editproductform__radio" onChange={onChange}/>
                <label htmlFor="conpami">Con Cobertura</label>
            </div>
            <label htmlFor="stock" className={"editproductform__label"}>Stock</label>
            <div id={"stock"}>
                <input type="radio" name="stock" id={"constock"} value={1} className="editproductform__radio" onChange={onChange}/>
                <FaCheck className="editproductform__label__constock"/>
                <input type="radio" name="stock" id={"commecistock"} value={0} className="editproductform__radio" onChange={onChange}/>
                <FaCheck className="editproductform__label__commecistock"/>
                <input type="radio" name="stock" id={"nostock"} value={-1} className="editproductform__radio" onChange={onChange}/>
                <FaTimes className="editproductform__label__nostock"/>
            </div>
            <label htmlFor="price" className="editproductform__label">Precio</label>
            <input type="text" id={"price"} name={"price"} className="editproductform__text" onChange={onChange}/>
            <label htmlFor="image" className="editproductform__label">Imagen Producto</label>
            <input type="file" id={"image"} name={"image"} className="editproductform__text" onChange={onChange}/>
            <input type="submit" value={"Editar Producto"} className="editproductform__submit searchbar_form_submit" onClick={onSubmit}/>
        </form>
    )
}

export default EditProductForm;