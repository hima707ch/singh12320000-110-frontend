import React from 'react';
import Hero from './Hero';
import AboutUs from './Aboutus';
import CallToAction from './CallToAction';
import Footer from './Footer';

const Body = () => {
  return (
    <div id="Body_1" className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <AboutUs />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;