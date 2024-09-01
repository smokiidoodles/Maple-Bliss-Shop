import React from 'react';
import { Link } from 'react-router-dom';

// This header Component appears on every page of the website.

function Header() {
  return (
    <header className=" text-pale p-4 font-baskervville shadow-lg">
      <ul className='bg-darkGreen text-xl md:text-2xl flex justify-around p-5 font-semibold'>
        <li><Link to="/products" className="flex-1 p-5">Products</Link></li>
        <li><Link to="/register" className="flex-1 p-5">Register</Link></li>
        <li><Link to="/" className="flex-1 p-5">Maple Bliss</Link></li>
        <li><Link to="/cart" className="flex-1 p-5">Cart</Link></li>
        <li><Link to="/login" className="flex-1 p-5">Login</Link></li>
      </ul>
    </header>
  );
}

export default Header;
