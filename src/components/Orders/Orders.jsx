import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Orders = () => {
    const cart = useLoaderData();
    // console.log(products);
    return (
        <div className='shop-container'>
            <div className='products-container'>
            <h1>The Orders Page {cart.length}</h1> 
            {
                cart.map(product => <ReviewItems 
                keys={product.id}
                product={product}
                
                ></ReviewItems>)
            }
           
            </div>
            <div className='Cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;