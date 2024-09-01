import React from 'react';
import { Link } from 'react-router-dom';

// This header Component appears on every page of the website.

function Header() {
  return (
  <header className="text-pale p-4 font-baskervville shadow-lg overflow-x-hidden">
    <ul className='bg-darkGreen text-xl flex flex-wrap justify-around p-4 font-semibold w-full'>
      <li className="flex-1 text-center"><Link to="/products">Products</Link></li>
      <li className="flex-1 text-center"><Link to="/register">Register</Link></li>
      <li className="flex-1 text-center"><Link to="/">Maple Bliss</Link></li>
      <li className="flex-1 text-center"><Link to="/cart">Cart</Link></li>
      <li className="flex-1 text-center"><Link to="/login">Login</Link></li>
  </ul>
</header>
  );
}

export default Header;
