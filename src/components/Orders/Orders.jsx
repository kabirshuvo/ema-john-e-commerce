import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css';

const Orders = () => {
    const cart = useLoaderData();
    // console.log(cart);
    return (
        <div className='shop-container'>
            <div className='review-container'>
            <h1>The Orders Page {cart.length}</h1> 
            {
                cart.map(product => <ReviewItems 
                key={product.id}
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