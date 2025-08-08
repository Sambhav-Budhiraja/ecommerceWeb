import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { ProductItem } from '../components/ProductItem';

const Collection = () => {
  const { products, search } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];

    if (search?.trim()) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter(item => subCategory.includes(item.subCategory));
    }

    switch (sortType) {
      case 'low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
    }

    setFilterProducts(filtered);
  };

  useEffect(() => {
    if (products.length > 0) {
      applyFilter();
    }
    // eslint-disable-next-line
  }, [products, category, subCategory, sortType, search]);

  return (
    <div className='border-t pt-10 px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row gap-10'>
      {/* Filter Sidebar */}
      <div className='sm:w-64'>
        <div 
          className='flex justify-between items-center cursor-pointer text-xl font-semibold mb-4 sm:hidden'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img 
            src={assets.dropdown_icon} 
            className={`h-3 transition-transform ${showFilter ? 'rotate-90' : ''}`} 
            alt='Toggle Filters' 
          />
        </div>

        <div className={`space-y-6 sm:block ${showFilter ? 'block' : 'hidden'}`}>
          {/* Categories */}
          <div className='border p-4 rounded-md'>
            <p className='font-medium mb-3'>CATEGORIES</p>
            {['Men', 'Women', 'Kids'].map((cat) => (
              <label key={cat} className='flex items-center gap-2 text-sm text-gray-700 mb-2'>
                <input
                  type='checkbox'
                  value={cat}
                  onChange={toggleCategory}
                  checked={category.includes(cat)}
                  className='accent-black'
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Subcategories */}
          <div className='border p-4 rounded-md'>
            <p className='font-medium mb-3'>TYPE</p>
            {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
              <label key={type} className='flex items-center gap-2 text-sm text-gray-700 mb-2'>
                <input
                  type='checkbox'
                  value={type}
                  onChange={toggleSubCategory}
                  checked={subCategory.includes(type)}
                  className='accent-black'
                />
                {type}
              </label>
            ))}
          </div>

          <button
            onClick={() => {
              setCategory([]);
              setSubCategory([]);
            }}
            className='mt-4 text-sm px-4 py-2 border rounded hover:bg-gray-100 transition'
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4'>
          <Title text1="All" text2="Collections" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border border-gray-300 px-3 py-1 rounded text-sm'
          >
            <option value='relevant'>Sort by: Relevance</option>
            <option value='low-high'>Price: Low to High</option>
            <option value='high-low'>Price: High to Low</option>
          </select>
        </div>

        <div className='mb-6 flex flex-wrap gap-2 text-sm'>
          {[...category, ...subCategory].map((tag, idx) => (
            <span
              key={idx}
              className='bg-gray-200 px-3 py-1 rounded-full text-gray-700'
            >
              {tag}
            </span>
          ))}
        </div>

        {filterProducts.length > 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {filterProducts.map((item) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        ) : (
          <div className='text-center py-20 text-gray-500 text-sm'>
            No products match your filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
