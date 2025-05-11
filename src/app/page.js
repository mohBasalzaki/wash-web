import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Products from './components/Products';
import AppPromotion from './components/AppPromotion';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <HowItWorks />
      <Services />
      <Products />
      <AppPromotion />
      <Testimonials />
    </>
  );
}
