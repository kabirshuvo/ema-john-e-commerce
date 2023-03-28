import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>

            <div><img src="../../images/Logo.svg
            " alt="" /></div>
            <div className='header-right'>
                <a href="/home">Home</a>
                <a href="order">Order</a>
                <a href="/review">Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
                
            </div>
            
            
        </div>
    );
};

export default Header;
