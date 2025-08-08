import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <div className="text-center mb-4 text-2xl">
        <Title text1={"Cart"} text2={"Total"} />
      </div>
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>SubTotal</span>
          <span>
            {currency}
            {subtotal}.00
          </span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span>Shipping Fee</span>
          <span>
            {currency}
            {deliveryFee}
          </span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span>
            {currency}
            {total}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;