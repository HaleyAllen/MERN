import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Detail = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();



    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Product: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: ${product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}

export default Detail;