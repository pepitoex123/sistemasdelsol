import ProductCell from "./ProductCell";
import {products} from "../fake-data/fakeProducts";


const ProductTable = () => {
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
                        products.map((product) => (
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