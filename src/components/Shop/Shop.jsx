import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('/public/products.json')
        .then(resp => resp.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='
        shop-container'>
            <div className='products-container'>
            Products {products.length}
            </div>
            <div className='Cart-container'>
                Cart
            </div>
                  
        </div>
    );
};

export default Shop;