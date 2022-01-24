import React from 'react'
    
const ProductList = (props) => {
    return (
        <div className='text-center'>
            <h1>All Products: </h1>
            {props.products.map( (product, i) =>
                <p key={i}>{product.title}</p>
            )}
        </div>
    )
}
    
export default ProductList;