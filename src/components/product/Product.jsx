import React from 'react';
import './Product.css';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = (props) => {
    const {img, name, stock, quantity, seller, price} = props.product;

    const addToCart = props.addToCart
    const addToCartIcon = <FontAwesomeIcon icon={faCartShopping}/>

   
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
           

                <button onClick={()=> addToCart(props.product)}> Add to Cart {addToCartIcon}</button>
                      
        </div>
    );
};

export default Product;
