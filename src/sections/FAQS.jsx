import React from 'react';

const HelpAndFAQSection = () => {
  return (
    <>
      {/* Black Header Section */}
      <section id="faqs" className="bg-black py-40 text-white relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="text-5xl font-bold text-transparent bg-clip-text leading-tight"
            style={{
              backgroundImage: 'linear-gradient(to right, #f97316 20%, #0f766e 80%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            How can we help you?
          </h2>
        </div>

        {/* Illustration on top right */}
        <img
          src="/faqs pic5.webp"
          alt="Help Illustration"
          className="absolute right-6 top-10 w-24 md:w-40"
        />
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h3 className="text-2xl font-semibold text-center mb-10 text-black">
            Frequently asked questions
          </h3>

          {/* FAQ Items */}
        <div className="space-y-4">
  {[
    {
      question: "What is PicMe?",
      answer:
        "PicMe is a digital marketplace that connects photographers, videographers, and other visual creatives with clients looking to hire their services for events, shoots, and more.",
    },
    {
      question: "What type of Photography and videography services are available?",
      answer:
        "We offer a wide range of services including event photography, fashion shoots, product photography, wedding videography, short films, and more.",
    },
    {
      question: "How can I book a Visual Creative for my project?",
      answer:
        "You can browse our list of verified creatives, check their portfolios, and book directly through the platform. Our intuitive booking system makes it quick and easy.",
    },
    {
      question: "Do you offer post-production services like editing and visual effects?",
      answer:
        "Yes! Many of our creatives also offer post-production services like photo retouching, video editing, color grading, and VFX. You can filter for these when searching.",
    },
    {
      question: "What is the plan for premium users like?",
      answer:
        "Premium users get access to top-tier creatives, priority customer support, advanced booking tools, and exclusive deals on services and promotions.",
    },
  ].map((item, index) => (
    <details key={index} className="bg-gray-100 p-4 rounded-md cursor-pointer">
      <summary className="font-medium text-gray-800">{item.question}</summary>
      <p className="mt-2 text-sm text-gray-700">{item.answer}</p>
    </details>
  ))}
</div>


          {/* Didn't Find an Answer */}
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold text-black mb-4">Didn’t find an answer?</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our team is just an email away and ready to answer your question.
            </p>
            <a
              href="#contact"
              className="inline-block bg-teal-700 text-white font-semibold px-10 text-xl py-3 rounded-md  hover:bg-teal-800 transition mt-6"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpAndFAQSection;
