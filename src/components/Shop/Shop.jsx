import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(resp => resp.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
       for(const id in storedCart){
        const savedProduct = products.find(product => product._id === id);
        if(savedProduct){
            const quantity = storedCart[id];
            savedProduct.quantity = quantity;
            savedCart.push(savedProduct);
        }
       }
       setCart(savedCart);
    }, [products])


    
    const addToCart = (product) =>{
       //const newCart = [...cart, product];
       let newCart = [];

       //* if product dosen't exist in the cart, then set quantity = 1;
       //* if exist update quantity by 1
       const exists = cart.find(pd => pd._id === product._id );
       if(!exists){
        product.quantity = 1;
        newCart = [...cart, product]
       } else {
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter(pd => pd._id !== product._id);
        newCart = [...remaining, exists]
       }

       setCart(newCart);
       addToDb(product._id)
    }
    return (
        <div className='
        shop-container'>
            <div className='products-container'>
{
            products.map(product => <Product key={product._id} product={product} addToCart={addToCart}/>)

}
            </div>
            <div className='Cart-container'>
                <Cart cart={cart}/>
            </div>
                  
        </div>
    );
};

export default Shop;