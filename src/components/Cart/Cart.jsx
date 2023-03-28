import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cart-components'>
            <div>
            <p>Order Summary</p>
            <p>Product in Cart:{cart.length}</p>
            <p>Product Price: ${}</p>
            <p>Shipping Cost: ${}</p>
            <p>Tax: ${}</p>
            <h5>Grand Total: {}</h5>
            <button>Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;
