import React from 'react';
import './ReviewItems.css';
const ReviewItems = ({product}) => {
    const {id, img, name, seller, price, quantity, shipping} = product;
console.log(product);

    return (
        <div className='review-itms'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p>{name}</p>
                <p>price: <span className='orange-text'></span></p>
            </div>
        </div>
    );
};

export default ReviewItems;