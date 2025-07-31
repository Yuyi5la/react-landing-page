import React from "react";

const TopCreatives  = () => {
  return (
     <section className="bg-white py-16 px-4 text-black">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Explore Top Creatives
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
      {[
        "Videography",
        "Hairstylist",
        "Makeup Artist"
      ].map((role, index) => (
        <div key={index} className="text-center">
          <div
            className="w-40 h-40 bg-gray-200 mb-4 transition-all duration-300 rounded hover:ring-4 hover:ring-orange-200"
          ></div>
          <p className="text-lg font-semibold">{role}</p>
        </div>
      ))}
    </div>


    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
      {[
        "Fashion Stylist",
        "Digital & Graphic Design"
      ].map((role, index) => (
        <div key={index} className="text-center">
          <div
            className="w-40 h-40 bg-gray-200 mb-4 mx-auto transition-all duration-300 rounded hover:ring-4 hover:ring-orange-200"
          ></div>
          <p className="text-lg font-semibold">{role}</p>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};
export default TopCreatives;