import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import WhyChoose from "./sections/WhyChoose";
import TopCreatives from "./sections/TopCreatives";
import Testimonials from "./sections/Testimonials"
import TemplateSection from "./sections/templatewhitesection"
import ContactUs from "./sections/ContactUs"
import FAQS from "./sections/FAQS"
import Footer from "./sections/Footer"
function App() {
  return (
    <>
      <Navbar/>
       <Hero /> 
       <HowItWorks/>
       <WhyChoose/>
       <TopCreatives/>
       <Testimonials/>
       <TemplateSection/>
       <ContactUs/>
       <FAQS/>
       <Footer/>
    </>
  )
}

export default App
