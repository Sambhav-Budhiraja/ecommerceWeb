import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1="About" text2="Us" />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us"/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio cum laboriosam perferendis magni! Quod in fuga minima neque quasi, voluptatem non distinctio veritatis nihil magnam commodi at incidunt, voluptate obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus rem. Voluptatem officia quo, harum totam inventore magnam error sequi impedit sit ratione sed quidem laudantium delectus nostrum voluptas? Qui?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iusto praesentium ipsa vitae expedita. Amet, consequatur quasi nemo assumenda maiores consequuntur nihil ex enim ut, tempore minus earum! Quod, dolorum.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1="Why" text2="Choose Us?" />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-2 border border-opacity-50 rounded-md'>
        {[
          { title: "Quality Assurance", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
          { title: "Convenience", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
          { title: "Exceptional Customer Service", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." }
        ].map((item, idx) => (
          <div key={idx} className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>{item.title}</b>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
