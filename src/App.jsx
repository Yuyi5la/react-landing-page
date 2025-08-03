import { useEffect } from 'react';
import './App.css';

import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import WhyChoose from "./sections/WhyChoose";
import TopCreatives from "./sections/TopCreatives";
import Testimonials from "./sections/Testimonials";
import Getstarted from "./sections/Getstartednow";
import ContactUs from "./sections/ContactUs";
import FAQS from "./sections/FAQS";
import Footer from "./sections/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <TopCreatives />
      <Testimonials />
      <Getstarted />
      <ContactUs />
      <FAQS />
      <Footer />
    </>
  );
}

export default App;
