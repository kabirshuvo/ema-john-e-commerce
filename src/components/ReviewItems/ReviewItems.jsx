import React from 'react';
import './ReviewItems.css';
const ReviewItems = ({product, handleRemoveFromCart}) => {
    const {id, img, name, seller, price, quantity, shipping} = product;


    return (
        <div className='review-itms'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p>{name}</p>
                <p>price: 
                    <span className='orange-text'> {price}</span> 
                    <span> *</span>
                    <span className='orange-text'> {quantity}</span>
                    </p>
                <p > shipping:<span className='orange-text'> {shipping}                    
                    </span> 
                    </p>
            </div>
            <div>
            <span onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>delete</span>
            </div>
        </div>
    );
};

export default ReviewItems;