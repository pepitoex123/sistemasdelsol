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
                        <th scope="col" id="responsive-table__cantidad">Cantidad</th>
                        <th scope="col" id="responsive-table__nombreComercial">Nombre Comercial</th>
                        <th scope="col" id="responsive-table__laboratorio">Laboratorio</th>
                        <th scope="col" id="responsive-table__monodroga">Monodroga</th>
                        <th scope="col" id="responsive-table__stock">Stock</th>
                        <th scope="col" id="responsive-table__suDescuento">Su Descuento</th>
                        <th scope="col" id="responsive-table__precio">Precio</th>
                        <th scope="col" id="responsive-table__precioConDescuento">Precio Con Desc.</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        input.search ? products.filter((product) => product[sanitizedInput].toLowerCase().includes(input.search.toLowerCase())).map((product) => (
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