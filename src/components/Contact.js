import React from 'react';

// import social
import { social } from '../data';

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-primary text-white min-h-[732px] section'
    >
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>
          Contact us
        </h2>
        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
          tristique ipsum.
        </p>

        {/* form */}
        <form className='px-8 lg:px-0 max-w-[600px] rounded-lg mx-auto flex flex-col space-y-6 mb-[46px]'>
          <input className='form-control' type='text' placeholder='Full name' />
          <input
            className='form-control'
            type='text'
            placeholder='Email address'
          />
          <textarea className='textarea' placeholder='Message'></textarea>
          <button className='btn bg-accent rounded-lg hover:bg-accent-hover transition-all'>
            Send Message
          </button>
        </form>

        {/* social */}
        <div className='flex items-center justify-between mx-auto max-w-[205px]'>
          {social.map((item, index) => {
            return (
              <a href='#' key={index}>
                <img src={item.icon}></img>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;