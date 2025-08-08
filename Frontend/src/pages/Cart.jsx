import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { currency, products, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const pid in cartItems) {
      for (const size in cartItems[pid]) {
        const quantity = cartItems[pid][size];
        if (quantity > 0) {
          tempData.push({ _id: pid, size, quantity });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='p-4 max-w-3xl mx-auto'>
      {cartData.map((item, index) => {
        const product = products.find(p => p._id === item._id);
        if (!product) return null;

        return (
          <div key={index} className='flex justify-between items-center border-b py-4'>
            <div className='flex gap-4 items-start'>
              <img className='w-16 h-16 object-cover' src={product.image[0]} alt={product.name} />
              <div>
                <p>{product.name}</p>
                <div className='flex items-center gap-2 mt-2'>
                  <p>{currency}{product.price}</p>
                  <span className='border px-2 py-1 text-sm'>{item.size}</span>
                </div>
              </div>
            </div>

            <input
              type='number'
              min={1}
              defaultValue={item.quantity}
              onChange={(e) => updateQuantity(item._id, item.size, parseInt(e.target.value))}
              className='w-14 text-center px-2 py-1 border ml-auto'
            />

            <img
              onClick={() => updateQuantity(item._id, item.size, 0)}
              className='w-4 mr-4 sm:w-5 cursor-pointer'
              src={assets.bin_icon}
              alt='Delete'
            />
          </div>
        );
      })}

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button
              onClick={() => navigate('/place-order')}
              className='bg-black text-white text-sm my-8 px-8 py-3'
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
