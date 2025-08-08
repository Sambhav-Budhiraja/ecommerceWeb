import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets.js';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartItemsCount } = useContext(ShopContext);

  return (
    <nav className="flex items-center justify-between py-6 px-4 sm:px-8 bg-white shadow-md sticky top-0 z-50">
      <Link to="/">
        <img src={assets.logo} className="w-36 cursor-pointer" alt="Logo" />
      </Link>

      <ul className="hidden sm:flex gap-8 text-gray-700 font-medium text-[15px]">
  {[
    { path: '/', label: 'Home' },
    { path: '/collection', label: 'Collection' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ].map(({ path, label }) => (
    <NavLink
      key={path}
      to={path}
      className={({ isActive }) =>
        `relative group transition-colors hover:text-black ${
          isActive ? 'text-black font-semibold' : ''
        }`
      }
    >
      <p className="pb-1">{label}</p>
      <span className="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 w-0 group-hover:w-full"></span>
    </NavLink>
  ))}
</ul>


      <div className="flex items-center gap-6 text-gray-600">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="Search"
          className="w-5 cursor-pointer hover:scale-110 transition-transform"
        />

        <div className="relative group">
          <Link to="/login">
            <img className="w-5 cursor-pointer hover:scale-110 transition-transform" src={assets.profile_icon} alt="Profile" />
          </Link>
          <div className="hidden group-hover:flex absolute right-0 top-full mt-3 bg-white border rounded shadow-lg flex-col w-40 py-2 z-20">
            {['My Profile', 'Orders', 'Logout'].map((item, idx) => (
              <p key={idx} className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">{item}</p>
            ))}
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="Cart" className="w-5 cursor-pointer hover:scale-110 transition-transform" />
          <p className="absolute right-[-6px] bottom-[-6px] w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[10px]">
            {getCartItemsCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden hover:scale-110 transition-transform"
          alt="Menu"
        />
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-white z-40 transition-all duration-500 ${
          visible ? 'w-3/4 shadow-xl' : 'w-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-700 p-6 gap-4">
          <div onClick={() => setVisible(false)} className="flex items-center gap-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p className="text-sm font-medium">Back</p>
          </div>
          {['/', '/collection', '/about', '/contact'].map((path, idx) => (
            <NavLink
              key={idx}
              onClick={() => setVisible(false)}
              to={path}
              className="py-3 pl-2 border-b hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              {['Home', 'Collection', 'About', 'Contact'][idx]}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
