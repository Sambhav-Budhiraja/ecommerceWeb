import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)

  return (
    <div className="pt-16 border-t px-4 sm:px-10">
      <div className="text-center text-2xl mb-8">
        <Title text1={'My'} text2={'Orders'} />
      </div>

      <div className="flex flex-col gap-6">
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b py-4 gap-4">
              <div className="flex items-start gap-4 text-sm w-full md:w-1/2">
                <img className="w-16 sm:w-20 rounded" src={item.image[0]} alt={item.name} />
                <div>
                  <p className="font-medium text-gray-800 sm:text-base">{item.name}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
                    <p className="text-base">{currency}{item.price}</p>
                    <p>Qty: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Date: 5 August 2025</p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-6 w-full md:w-1/2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-sm text-green-700">Ready to Ship</p>
                </div>
                <button className="border border-gray-700 px-4 py-2 rounded hover:bg-gray-900 hover:text-white transition text-sm">
                  Track Order
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
