import React from 'react';

// import skills data
import { skills } from '../data';

const Skills = () => {
  return (
    <section id='skills' className='section bg-[#F5F8FD] pb-10'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>
          Our Services
        </h2>
        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
          Grow your business and remain compliance by partnering with green house association for a range of high quality, 
          business services from incorporation to payroll delivered through a seamless online platform.
        </p>
        <div className='lg:grid lg:grid-cols-3 gap-12'>
          {skills.map((item, index) => {
            const { icon, title, description } = item;
            return (
              <div
                className='flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0 bg-white hover:bg-[#EFF6FF] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'
                key={index}
              >
                <img className='mb-6' src={icon} alt='' />
                <h4 className='text-2xl mb-2 text-[#000] hover:to-blue-600 font-bold'>
                  {title}
                </h4>
                <p className='max-w-[332px] lg:max-w-[350px]'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
