import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('/public/products.json')
        .then(resp => resp.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
       for(const id in storedCart){
        const savedProduct = products.find(product => product.id === id);
        if(savedProduct){
            const quantity = storedCart[id];
            savedProduct.quantity = quantity;
            savedCart.push(savedProduct);
        }
       }
       setCart(savedCart);
    }, [products])


    
    const addToCart = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart);
       addToDb(product.id)
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
                <Cart cart={cart}/>
            </div>
                  
        </div>
    );
};

export default Shop;