import React from 'react';
import { FaGlobe, FaBriefcase, FaPenToSquare, FaCompass, FaUserPlus, FaWallet } from 'react-icons/fa6';

const features = [
  { icon: <FaGlobe size={30} />, title: 'Browse and Discover', text: 'Explore creative profiles and portfolios tailored to your needs.' },
  { icon: <FaBriefcase size={30} />, title: 'Hire and Collaborate', text: 'Explore creative profiles and portfolios tailored to your needs.' },
  { icon: <FaPenToSquare size={30} />, title: 'Receive and Review', text: 'Explore creative profiles and portfolios tailored to your needs.' },
  { icon: <FaCompass size={30} />, title: 'Get Discovered and Hired', text: 'Explore creative profiles and portfolios tailored to your needs.' },
  { icon: <FaUserPlus size={30} />, title: 'Signup and Showcase', text: 'Explore creative profiles and portfolios tailored to your needs.' },
  { icon: <FaWallet size={30} />, title: 'Earn and Grow', text: 'Explore creative profiles and portfolios tailored to your needs.' },
];

const HowItWorks = () => {
  return (
    <section className="bg-white text-black text-center px-6 py-20">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100} // adds a stagger effect
            className="bg-white rounded-lg p-6 shadow-md hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="text-gray-600 mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
