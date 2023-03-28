import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('/public/products.json')
        .then(resp => resp.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='
        shop-container'>
            <div className='products-container'>
{
            products.map(product => <Product key={product.id} product={product}/>)

}
            </div>
            <div className='Cart-container'>
                Cart
            </div>
                  
        </div>
    );
};

export default Shop;