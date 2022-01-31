import {useParams} from "react-router-dom";

const EditProduct = () => {

    const { id } = useParams();


    return (
        <div>
            Edit Product { id }
        </div>
    )
}


export default EditProduct;