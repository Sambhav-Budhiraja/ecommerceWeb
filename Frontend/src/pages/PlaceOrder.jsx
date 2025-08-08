import React, { useState, useContext } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1="Delivery" text2="Information" />
        </div>

        <div className='flex gap-3'>
          <input type="text" placeholder="First Name" className="input-box" />
          <input type="text" placeholder="Last Name" className="input-box" />
        </div>

        <input type="email" placeholder="Email" className="input-box" />
        <input type="text" placeholder="Street Address" className="input-box" />

        <div className='flex gap-3'>
          <input type="text" placeholder="City" className="input-box" />
          <input type="text" placeholder="State" className="input-box" />
        </div>

        <div className='flex gap-3'>
          <input type="number" placeholder="Pincode" className="input-box" />
          <input type="text" placeholder="Country" className="input-box" />
        </div>

        <input type="number" placeholder="Phone Number" className="input-box" />
      </div>

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1="Payment" text2="Method" />
          <div className='flex gap-3 flex-col lg:flex-row'>

            <div onClick={() => setMethod('stripe')} className={`payment-option ${method === 'stripe' ? 'selected' : ''}`}>
              <p className='selector-dot'></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="stripe" />
            </div>

            <div onClick={() => setMethod('razorpay')} className={`payment-option ${method === 'razorpay' ? 'selected' : ''}`}>
              <p className='selector-dot'></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="razorpay" />
            </div>

            <div onClick={() => setMethod('cod')} className={`payment-option ${method === 'cod' ? 'selected' : ''}`}>
              <p className='selector-dot'></p>
              <p className='text-gray-600 text-sm font-medium mx-4'>Cash On Delivery</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button
              onClick={() => navigate('/orders')}
              className='bg-black text-white px-16 py-3 text-sm uppercase tracking-wider hover:bg-gray-800'
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .input-box {
          border: 1px solid #ccc;
          border-radius: 0.375rem;
          padding: 0.625rem 0.875rem;
          width: 100%;
        }

        .payment-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid #ccc;
          padding: 0.5rem 0.75rem;
          cursor: pointer;
          border-radius: 0.375rem;
          transition: all 0.2s;
        }

        .payment-option.selected {
          border-color: #4ade80;
          background-color: #f0fdf4;
        }

        .selector-dot {
          min-width: 0.875rem;
          height: 0.875rem;
          border: 1px solid #ccc;
          border-radius: 9999px;
          background-color: transparent;
        }

        .payment-option.selected .selector-dot {
          background-color: #4ade80;
          border-color: #4ade80;
        }
      `}</style>
    </div>
  );
};

export default PlaceOrder;
