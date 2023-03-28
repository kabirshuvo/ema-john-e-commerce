import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('/public/products.json')
        .then(resp => resp.json())
        .then(data => setProducts(data))
    }, []);


    const [cart, setCart] = useState([]);
    const addToCart = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart);
    }
    return (
        <div className='
        shop-container'>
            <div className='products-container'>
{
            products.map(product => <Product key={product.id} product={product} addToCart={addToCart}/>)

}
            </div>
            <div className='Cart-container'>
                <div className='cart-components'>
                Cart = {cart.length}
                </div>
            </div>
                  
        </div>
    );
};

export default Shop;