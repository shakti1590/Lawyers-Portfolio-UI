import React from "react";
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import About from '../components/Aboutus';
import Faq from '../components/faq';
import Whychoose from '../components/Whychooseus';

const Home = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <About />
      <Services />
      <Whychoose />
      <Faq />
    </div>
  );
};

export default Home;
