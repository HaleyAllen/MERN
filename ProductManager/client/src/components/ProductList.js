import React from 'react'
import { useParams } from "react-router-dom";
    
const ProductList = (props) => {
    return (
        <div className='text-center'>
            <h1>All Products: </h1>
            {props.products.map( (product, i) =>
                <p key={i}><a href='/products/:id'>{product.title}</a></p>
            )}
        </div>
    )
}
    
export default ProductList;