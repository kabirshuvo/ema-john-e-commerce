import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let productTotal = 0;
    let shippingCost =0;
    for(const product of cart){
        productTotal = productTotal + product.price;
        shippingCost = shippingCost + product.shipping;
    }
   
    const tax = productTotal*3.5/100;
    const gradTotal = productTotal + shippingCost + tax;
    

    return (
        <div className='cart-components'>
            <div>
            <p>Order Summary</p>
            <p>Product in Cart : {cart.length}</p>
            <p>Product Price : <span className='money-sign'>$</span> {productTotal.toFixed(2)}</p>
            <p>Shipping Cost : <span className='money-sign'>$</span> {shippingCost.toFixed(2)}</p>
            <p>Tax : <span className='money-sign'>$</span> {tax.toFixed(2)}</p>
            <h5>Grand Total : <span className='money-sign'>$</span> {gradTotal.toFixed(2)}</h5>
            <button>Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;
