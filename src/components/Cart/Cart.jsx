import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let productTotal = 0;
    let shippingCost =0;
    let quantity = 0;
    for(const product of cart){
        //product.quantity = product.quantity || 1;
        productTotal = productTotal + product.price *product.quantity ;
        shippingCost = shippingCost + product.shipping;
        quantity = quantity + product.quantity;
    }
   
    const tax = productTotal*3.5/100;
    const gradTotal = productTotal + shippingCost + tax;
    
const clearCart = () => {
    localStorage.clear()
}
    return (
        <div className='cart-components'>
            <div>
            <p>Order Summary</p>
            <p>Product in Cart : {quantity}</p>
            <p>Product Price : <span className='money-sign'>$</span> {productTotal.toFixed(2)}</p>
            <p>Shipping Cost : <span className='money-sign'>$</span> {shippingCost.toFixed(2)}</p>
            <p>Tax : <span className='money-sign'>$</span> {tax.toFixed(2)}</p>
            <h5>Grand Total : <span className='money-sign'>$</span> {gradTotal.toFixed(2)}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;
