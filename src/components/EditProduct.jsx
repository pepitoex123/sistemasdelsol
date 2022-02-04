import {useParams} from "react-router-dom";
import EditProductForm from "./EditProductForm";

const EditProduct = () => {

    const { id } = useParams();


    return (
        <div>
            <h1 className="editproduct__title">Editar producto { id } </h1>
            <EditProductForm/>
        </div>
    )
}


export default EditProduct;