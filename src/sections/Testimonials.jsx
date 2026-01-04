import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const testimonials = [
  {
    name: 'Sk Jessy',
    image: '/sk-6 2.webp',
    text:
      "PicMe helped me to get a really good graphic designer that communicated my brand values, and delivered timely and quality work as requested. I’d strongly recommend",
  },
  {
    name: 'Bright Tech',
    image: '/3P0A0071.webp',
    text:
      "PicMe helped me to get a super fast creative in minutes after the one I booked disappointed me and the Makeupartist was excellent, I totally don’t regret my decision.",
  },
  {
    name: 'Divine',
    image: '/3P0A9538.webp',
    text:
      "PicMe has helped me to improve my brand presence with a great photographer, graphic designer and video editor. I really don’t know how I would’ve managed it in such little time but they came through and made it happen. Kudos to PicMe frfr…they ate!",
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-slide (stops feeling static)
  useEffect(() => {
    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, []);

  // Swipe support
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="bg-black text-white py-16 px-4 md:px-12">
      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-lg font-semibold">
          Reviews
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        What users say about PicMe
      </h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-6xl mx-auto">
        
        {/* Image */}
        <div className="relative">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="w-64 h-80 object-cover rounded-xl transition duration-500"
          />

          <div className="absolute -bottom-4 left-4 bg-white text-black rounded-full px-4 py-2 flex items-center shadow">
            <span className="font-semibold text-sm mr-2">
              Trusted Clients
            </span>
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
        <div
          {...swipeHandlers}
          onClick={handleNext}
          className="bg-orange-500 text-white rounded-xl p-6 md:p-10 w-full max-w-xl relative cursor-pointer select-none hover:scale-[1.01] transition"
        >
          <div className="text-4xl mb-4">❝</div>

          <p className="leading-relaxed text-white text-md mb-6">
            {testimonials[activeIndex].text}
          </p>

          <p className="text-sm font-semibold">
            {testimonials[activeIndex].name}
          </p>

          {/* Pagination */}
          <div className="flex gap-3 mt-6 justify-center items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(index);
                }}
                aria-label={`View testimonial ${index + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-white'
                    : 'w-5 bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>

          {/* Hint */}
          <p className="text-xs text-white/80 text-center mt-3">
            Tap or swipe to see next review
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
