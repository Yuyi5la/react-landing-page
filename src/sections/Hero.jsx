import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-black text-white px-6 py-40 md:py-52 overflow-hidden z-10 min-h-screen flex items-center">

      <div className="relative z-10 max-w-4xl md:mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          The Marketplace <br />
          for{' '}
           <span
             className="font-bold text-transparent"
              style={{
              backgroundImage: 'linear-gradient(to right, #f97316 20%, #0f766e 80%)',
              WebkitBackgroundClip: 'text',
             backgroundClip: 'text',
              }}
                >
                   Visual Creatives
                 </span>

        </h1>

        <p className="text-lg text-gray-300 mb-10 max-w-xl">
          Hire top creative talent or showcase your skill and start earning. <br />
          Connect, create, and collaborate effortlessly.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-400 to-teal-700 text-black px-6 py-3 rounded font-bold transition hover:bg-teal-700"
          >
            Hire a Creative
          </a>
          <a
            href="#"
            className="bg-teal-700 text-white px-6 py-3 rounded font-bold transition duration-300 hover:bg-teal-800"
         >
           Join as a Creative
           </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
