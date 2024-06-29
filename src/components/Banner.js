import React from 'react';

// import image
import Image from '../assets/img/lawyer_banner.png';

// import components
import Header from './Header';
import Appointment from './Appointment';

const Banner = () => {
  return (
    <section
      id='home'
      className='lg:h-full lg:max-h-800 bg-white'
    >
      <Header />
      <div className='container mx-auto h-full lg:flex pt-32'>
        <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
          <h1 className='font-primary font-black text-6xl lg:text-7xl text-black mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>
            Crafting Solutions <br /> <span className='text-[#4F46E5]'>Protecting Futures.</span>
          </h1>
          <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>
            we help you navigate the complexities of compliance and financial management, allowing you to focus on what you do best – growing your business.
          </p>
          {/* Appointment */}
          <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'>
            <Appointment />
          </div>
        </div>
        {/* Banner Image */}
        <div className='hidden flex-1 lg:flex lg:flex-col items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Banner;
