import React from 'react';
import Hero from '../components/Hero/Hero';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import Showcase from '../components/Showcase/Showcase';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Showcase />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default Home;
