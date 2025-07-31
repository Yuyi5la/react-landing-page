import { useState } from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    message: 'PicMe helped me reach new clients effortlessly. I’ve grown my brand and income thanks to the amazing platform!',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Alex Smith',
    message: 'The booking process was smooth and reliable. I was able to get work done quickly and securely.',
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Tina Okoro',
    message: 'I signed up as a makeup artist and got booked within the first week. The visibility is top notch!',
    image: 'https://via.placeholder.com/300',
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-orange-500 text-black rounded-2xl px-10 py-12 md:ml-20 w-full max-w-3xl shadow-2xl">
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
            “{testimonials[current].message}”
          </p>
          <h4 className="text-lg font-bold text-gray-800">— {testimonials[current].name}</h4>

          {/* White Ellipsis Button */}
          <button
            onClick={nextTestimonial}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-3xl hover:scale-110 transition"
            aria-label="Next Testimonial"
          >
            &hellip;
          </button>
        </div>
      </div>
    </section>
  );
}
