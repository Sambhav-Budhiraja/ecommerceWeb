import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t pt-10 px-4 sm:px-10'>
      <div className='flex flex-col sm:flex-row gap-10'>

        <div className='flex gap-4 flex-1'>
          <div className='flex flex-col gap-2 max-h-[500px] overflow-y-auto'>
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`w-20 h-20 object-cover rounded border cursor-pointer hover:scale-105 transition ${
                  image === item ? 'ring-2 ring-black' : ''
                }`}
                alt={`thumb-${index}`}
              />
            ))}
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <img
              src={image}
              className='h-[500px] w-auto object-contain rounded shadow-md'
              alt='main-product'
            />
          </div>
        </div>

        <div className='flex-1'>
          <h2 className='text-2xl font-semibold'>{productData.name}</h2>
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className='w-3.5' />
            ))}
            <img src={assets.star_dull_icon} alt="star" className='w-3.5' />
            <p className='pl-2'>(69)</p>
          </div>
          <p className='mt-5 text-3xl font-semibold'>
            {currency}
            {productData.price}
          </p>
          <p className='mt-5 text-gray-600 w-4/5'>{productData.description}</p>

          <div className='my-8'>
            <p className='mb-2 font-medium'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 rounded bg-gray-100 transition ${
                    item === size ? 'border-orange-500 bg-orange-50' : ''
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className='bg-black text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-800'
          >
            Add to Cart
          </button>

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 space-y-1'>
            <p>✅ 100% Original Product</p>
            <p>🚚 Cash on Delivery available</p>
            <p>🔁 Easy returns within 7 days</p>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <b className='border px-5 py-3 text-sm'>Reviews</b>
        </div>
        <div className='border px-6 py-6 text-sm text-gray-500 space-y-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis odit fuga consequatur.</p>
          <p>Facere minima tempora aliquam debitis quod laborum quibusdam numquam repellat consequatur.</p>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className='min-h-[60vh] flex items-center justify-center text-gray-400'>
      Loading product...
    </div>
  );
};

export default Product;
