

const ProductCell = ({productTitle,company,id,stock,price,priceDiscount,dto}) => {
    return(
        <>
            <tr>
                <th scope="row">{productTitle}</th>
                <td data-title="Company">{company}</td>
                <td data-title="ID">{id}</td>
                <td data-title="Stock">{stock}</td>
                <td data-title="Price" data-type="currency">${price}</td>
                <td data-title="Price With Discount" data-type="currency">${priceDiscount}</td>
                <td data-title="DTO" data-type="currency">${dto}</td>
            </tr>
        </>
    )
}

export default ProductCell;