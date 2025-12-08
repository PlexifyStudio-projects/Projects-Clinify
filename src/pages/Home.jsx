import React from 'react';
import Hero from '../components/Hero/Hero';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import Showcase from '../components/Showcase/Showcase';
import VideoDemo from '../components/VideoDemo/VideoDemo';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import CaseStudy from '../components/CaseStudy/CaseStudy';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Showcase />
      <VideoDemo />
      <HowItWorks />
      <CaseStudy />
      <Testimonials />
    </>
  );
};

export default Home;
