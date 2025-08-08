import React from 'react';
import { assets } from '../assets/assets.js';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <div className="w-full sm:w-1/2 flex items-center justify-center p-8 sm:p-12">
          <div className="text-[#414141] space-y-5 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-[#414141]"></div>
              <p className="text-sm md:text-base font-medium tracking-wide">OUR BEST SELLER</p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">Latest Arrivals</h1>

            <div className="flex items-center gap-3 group cursor-pointer w-fit">
              <p className="text-sm md:text-base font-semibold transition-all group-hover:tracking-wider">
                SHOP NOW
              </p>
              <div className="w-8 md:w-11 h-[2px] bg-[#414141] group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full sm:w-1/2">
          <img
            className="w-full h-full object-cover"
            src={assets.hero_img}
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
