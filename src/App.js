import React from 'react';

// import components
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import About from './components/Aboutus';
import Faq from './components/faq';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Whychoose from './components/Whychooseus';
const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      <About />
      <Services />
      <Whychoose />
      <Faq />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;