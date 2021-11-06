import ProductCell from "./ProductCell";
import {products} from "../fake-data/fakeProducts";


const ProductTable = ({input}) => {


    return(
        <section>
            <div className="container">
                <table className="responsive-table">
                    <caption>Product Stock</caption>
                    <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Company</th>
                        <th scope="col">ID</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Price</th>
                        <th scope="col">Price With Discount</th>
                        <th scope="col">Dto</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        input.search ? products.filter((product) => product[input.filter].includes(input.search)).map((product) => (
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