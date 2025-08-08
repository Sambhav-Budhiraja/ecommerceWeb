import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="px-6 sm:px-10 mt-40">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 text-sm text-gray-700">
        <div>
          <img src={assets.logo} className="mb-4 w-32" alt="Forever Logo" />
          <p className="max-w-md text-gray-600 text-sm leading-relaxed">
            Discover timeless fashion and curated collections at Forever. Quality meets style — every time.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
          <ul className="space-y-2 text-gray-600">
            <li>+91 9999999999</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-200" />
      <p className="py-6 text-center text-xs text-gray-500">
        © 2025 Forever. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
