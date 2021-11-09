import ProductCell from "./ProductCell";
import {products} from "../fake-data/fakeProducts";


const ProductTable = ({input}) => {

    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    let sanitizedInput = camelize(input.filter)



    return(
        <section>
            <div className="container">
                <table className="responsive-table">
                    <thead>
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Nombre Comercial</th>
                        <th scope="col">Laboratorio</th>
                        <th scope="col">Monodroga</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Descuento Público</th>
                        <th scope="col">Su Descuento</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Precio Con Descuento</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        input.search ? products.filter((product) => product[sanitizedInput].includes(input.search)).map((product) => (
                            <ProductCell key={product.id} {...product} />
                        )) : products.map((product) => (
                            <ProductCell key={product.id} {...product} />
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ProductTable;