import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group block text-gray-700 cursor-pointer transition-transform"
    >
      <div className="overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
        <img
          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 text-sm font-medium truncate">{name}</p>
      <p className="text-sm font-semibold text-gray-800">
        {currency}
        {price}
      </p>
    </Link>
  );
};
