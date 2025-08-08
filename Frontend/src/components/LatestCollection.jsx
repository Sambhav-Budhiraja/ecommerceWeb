import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { ProductItem } from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="my-16 px-4 sm:px-10">
      <div className="text-center mb-10">
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-sm text-gray-600 mt-4 leading-relaxed">
          Explore our freshest picks crafted with care. Stay ahead in fashion with these latest additions tailored to elevate your style.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {latestProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
