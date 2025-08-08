import React, { useEffect, useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes('collection'));
  }, [location]);

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 py-4 text-center'>
      <div className='inline-flex items-center border border-gray-300 px-5 py-2 rounded-full w-11/12 sm:w-1/2'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm'
          placeholder='Search products...'
          type='text'
        />
        <img className='w-4' src={assets.search_icon} alt='search' />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className='inline w-3 ml-2 cursor-pointer'
        src={assets.cross_icon}
        alt='close'
      />
    </div>
  ) : null;
};

export default SearchBar;
