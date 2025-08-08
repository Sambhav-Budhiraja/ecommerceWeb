import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className="pt-10 border-t">
      <div className="text-center text-2xl">
        <Title text1={'Contact'} text2={'Us'} />
      </div>

      <div className="my-12 flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        <img className="w-full md:max-w-[450px] rounded-lg shadow-md" src={assets.contact_img} alt="Contact" />

        <div className="flex flex-col gap-5 text-left text-gray-700 w-full md:max-w-[500px]">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Our Store</h3>
            <p>House 999, 1234 Street<br />Jaipur, Rajasthan, India</p>
          </div>

          <div>
            <p>Tel: (123) 456-7890<br />Email: admin@forever.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Careers at Forever</h3>
            <p className="mb-2 text-blue-600 hover:underline cursor-pointer">Learn More</p>
            <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
