import React from 'react'
import {Link} from 'react-router-dom';

import Logo from '../images/iDesignLogo.png'
import Cart from './Cart';
import Products from './Products';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo"> <img src={Logo} alt="Logo"  /> </div>
      <div className="nav-links">
        <Link to="/products" className="link" element={<Products/>} >Products</Link>
        <Link to="/cart" className="link" element={<Cart/>} >Cart</Link>
      </div>
    </div>
  )
}

export default Header