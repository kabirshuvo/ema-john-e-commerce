import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>

            <div><img src="../../images/Logo.svg
            " alt="" /></div>
            <div className='header-right'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/review">Review</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                
            </div>
            
            
        </div>
    );
};

export default Header;
