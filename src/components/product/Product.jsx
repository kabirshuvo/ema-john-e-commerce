import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, stock, quantity, seller, price} = props.product;
    return (
        <div className='product-container'>
            <div>
            <img src={img} alt="product-img" />
            <div>
           <p>{name} -inStock : <span>{stock}</span></p>
            <p>Manufacturer : {seller}</p>
            <p>Price : $ {price}</p>
            </div>
            </div>
           

                <button> Add to Cart (CartIcon)</button>
                      
        </div>
    );
};

export default Product;
