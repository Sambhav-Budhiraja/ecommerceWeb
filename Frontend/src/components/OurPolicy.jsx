import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: 'Easy Exchange Policy',
      desc: 'We offer hassle-free exchange policy',
    },
    {
      icon: assets.quality_icon,
      title: '7 Days Return Policy',
      desc: 'We provide a 7-day return window',
    },
    {
      icon: assets.support_img,
      title: 'Best Customer Support',
      desc: 'We offer 24/7 customer support',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-10 text-center">
        {policies.map((policy, index) => (
          <div key={index} className="max-w-xs">
            <img src={policy.icon} className="w-12 mx-auto mb-4" alt={policy.title} />
            <p className="font-semibold text-gray-800">{policy.title}</p>
            <p className="text-gray-500 text-sm">{policy.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;
