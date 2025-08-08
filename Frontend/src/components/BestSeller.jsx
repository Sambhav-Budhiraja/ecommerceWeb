import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { ProductItem } from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="my-16 px-4 sm:px-10">
      <div className="text-center mb-10">
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-sm text-gray-600 mt-4 leading-relaxed">
          Tried, tested, and loved! Our bestsellers have captured hearts — find out what everyone's talking about.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSellers.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
