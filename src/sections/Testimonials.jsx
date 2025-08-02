import React, { useState } from 'react';

const testimonials = [
  {
    name: 'James Carter',
    image: '/person1.webp',
    text: "PicMe helped me connect with top creatives in minutes. It’s fast, reliable, and super easy to use.",
  },
  {
    name: 'Henry Nwadike',
    image: '/person3.avif',
    text: "As a photographer, I’ve never had this much visibility. The platform is a game changer!",
  },
  {
    name: 'Tolu Adebayo',
    image: '/person2.webp',
    text:"Finding a makeup artist that fits my budget and style has never been easier. Love PicMe!",
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-black text-white py-16 px-4 md:px-12">
      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Testimonials
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Users say about PicMe Platform
      </h2>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-6xl mx-auto transition-all">
        {/* Image and client label */}
        <div className="relative">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="w-64 h-80 object-cover rounded-xl transition duration-300"
          />

          <div className="absolute -bottom-4 left-4 bg-white text-black rounded-full px-4 py-2 flex items-center shadow">
            <span className="font-semibold text-sm mr-2">Trusted Clients</span>
            <div className="flex -space-x-2">
              {testimonials.map((client, index) => (
                <img
                  key={index}
                  src={client.image}
                  alt={client.name}
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="bg-orange-500 text-white rounded-xl p-6 md:p-10 w-full max-w-xl relative">
          <div className="text-4xl mb-4">❝</div>
          <p className="leading-relaxed text-white text-md mb-6 transition duration-300">
            {testimonials[activeIndex].text}
          </p>
          <p className="text-sm font-semibold">{testimonials[activeIndex].name}</p>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-6 justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-6 bg-white'
                    : 'w-4 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;