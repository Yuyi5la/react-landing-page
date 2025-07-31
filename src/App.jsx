import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import WhyChoose from "./sections/WhyChoose";
import TopCreatives from "./sections/TopCreatives";
import Testimonials from "./sections/Testimonials"

function App() {
  return (
    <>
      <Navbar/>
       <Hero /> 
       <HowItWorks/>
       <WhyChoose/>
       <TopCreatives/>
       <Testimonials/>
    </>
  )
}

export default App
