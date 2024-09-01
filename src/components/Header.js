import React from 'react';
import { Link } from 'react-router-dom';

// This header Component appears on every page of the website.

function Header() {
  return (
    <header className="text-pale p-3 md:p-4 font-baskervville shadow-lg overflow-x-hidden">
      <ul className='bg-darkGreen text-lg sm:text-xl md:text-2xl grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 p-3 sm:p-4 font-semibold'>
        <li className="flex items-center justify-center p-2"><Link to="/products">Products</Link></li>
        <li className="flex items-center justify-center p-2"><Link to="/register">Register</Link></li>
        <li className="flex items-center justify-center p-2"><Link to="/">Maple Bliss</Link></li>
        <li className="flex items-center justify-center p-2"><Link to="/cart">Cart</Link></li>
        <li className="flex items-center justify-center p-2"><Link to="/login">Login</Link></li>
  </ul>
  </header>
  );
}

export default Header;
