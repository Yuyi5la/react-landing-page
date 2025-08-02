import React from 'react';

const GetStartedSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600 via-black to-teal-700 text-white p-10 rounded-2xl shadow-lg relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-white">Get </span>
          <span className="text-orange-400">Started </span>
          <span className="text-teal-400">Now</span>
        </h2>

        <p className="text-center text-white text-md mb-6">
          Join PicMe today, get pic-ed as a creative or find a creative in any field that fits your budget
        </p>

        <div className="flex justify-center">
       <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
       className="bg-gradient-to-r from-orange-400 to-teal-700 text-white font-semibold px-6 py-3 rounded shadow-md hover:opacity-90 transition"
        >
      Click here to get started
      </a>
      </div>


        {/* Decorative camera image */}
        <img
          src="/camerasketch3.png" 
          alt="Camera"
          className="absolute bottom-0 right-0 w-28 md:w-36 lg:w-40 pointer-events-none opacity-80"
        />
      </div>
    </section>
  );
};

export default GetStartedSection;
