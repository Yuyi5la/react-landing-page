import React from "react";
import Hero from "../sections/Hero.jsx";
import HowItWorks from "../sections/HowItWorks.jsx";
import WhyChoose from "../sections/WhyChoose.jsx";
import TopCreatives from "../sections/TopCreatives.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Getstarted from "../sections/Getstartednow.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <TopCreatives />
      <Testimonials />
      <Getstarted />
    </>
  );
};

export default HomePage;
