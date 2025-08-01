import React from 'react';

const HelpAndFAQSection = () => {
  return (
    <>
      {/* Black Header Section */}
      <section className="bg-black py-40 text-white relative">
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
          src="/map-pointer-camera-icon-260nw-245413006.webp"
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
              "What is PicMe?",
              "What type of Photography and videography services are available?",
              "How can I book a Visual Creative for my project?",
              "Do you offer post-production services like editing and visual effect?",
              "What is the plan for premium users like?",
            ].map((question, index) => (
              <details key={index} className="bg-gray-100 p-4 rounded-md cursor-pointer">
                <summary className="font-medium text-gray-800">{question}</summary>
                <p className="mt-2 text-sm text-gray-700">
                  This is a placeholder answer. Replace with your actual content.
                </p>
              </details>
            ))}
          </div>

          {/* Didn't Find an Answer */}
          <div className="text-center mt-12">
            <h4 className="text-xl font-bold text-black mb-2">Didn’t find an answer?</h4>
            <p className="text-gray-700 mb-4">
              Our team is just an email away and ready to answer your question.
            </p>
            <a
              href="#contact"
              className="inline-block bg-teal-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-teal-800 transition"
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
