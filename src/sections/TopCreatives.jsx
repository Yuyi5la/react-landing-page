import React from "react";

const TopCreatives = () => {
  return (
    <section className="bg-white py-16 px-4 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Top Creatives
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {[
            {
              label: "Videography",
              image: "/DSC01237 copy.JPEG", 
            },
            {
              label: "Model",
              image: "/3P0A6746.JPEG", 
            },
            {
              label: "Makeup Artist",
              image: "/IMG_8790.JPG", 
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.image}
                alt={item.label}
                className="w-40 h-40 object-cover rounded mb-4 mx-auto shadow-md hover:ring-4 hover:ring-orange-200"
              />
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-12 w-full max-w-lg mx-auto">

          {[
            {
              label: "Fashion Stylist",
              image: "/3P0A6667.JPEG", 
            },
            {
              label: "Digital & Graphic Design",
              image: "/graphic designer.jpg", 
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.image}
                alt={item.label}
                className="w-40 h-40 object-cover rounded mb-4 mx-auto shadow-md hover:ring-4 hover:ring-orange-200"
              />
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCreatives;
