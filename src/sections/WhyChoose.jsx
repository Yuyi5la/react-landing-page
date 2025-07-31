import React from "react";

const WhyChoose = () => {
  return (
   <section className="bg-teal-950 text-white py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
    
    {/* LEFT SIDE - Placeholder for image, even on small screens */}
    <div className="w-full md:w-1/2 min-h-[300px] bg-gray-800 rounded-lg flex items-center justify-center">
      {/* Replace with actual image later */}
      <span className="text-gray-500">[ Image Placeholder ]</span>
    </div>

    {/* RIGHT SIDE - Text block */}
    <div className="w-full md:w-1/2 md:pl-10 flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-left md:ml-4">
        Why choose PicMe?
      </h2>
      <div className="h-1 w-48 bg-gradient-to-r from-orange-400 to-teal-700 mt-2 mb-8 rounded md:ml-4"></div>

      {/* For Clients */}
      <div className="mb-8 md:ml-4">
        <h3 className="text-xl font-semibold text-orange-400 mb-2">For Clients:</h3>
        <ul className="text-gray-300 space-y-1">
          <li>Access a diverse pool of skilled creatives.</li>
          <li>Compare portfolios, pricing, and ratings.</li>
          <li>Secure transactions and seamless communication.</li>
        </ul>
      </div>

      {/* For Creatives */}
      <div className="md:ml-4">
        <h3 className="text-xl font-semibold text-orange-400 mb-2">For Creatives:</h3>
        <ul className="text-gray-300 space-y-1">
          <li>Get booked and paid directly.</li>
          <li>Set your own rates and schedule.</li>
          <li>Gain visibility and build credibility.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


  );
};

export default WhyChoose;
