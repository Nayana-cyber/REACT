
import React from 'react';
import { useParams} from 'react-router-dom';
import './Product.css'; 

const Product = () => {
    const { id } = useParams();
  

    const productDetails = {
        1: "Details about Product 1",
        2: "Details about Product 2",
        3: "Details about Product 3"
    };

    const productDetail = productDetails[id] || "Product not found";

    return (
        <div className="container">
            <h1>Product {id}</h1>
            <p>{productDetail}</p>
           </div>
    );
};

export default Product;