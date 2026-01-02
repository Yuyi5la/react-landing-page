const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-black text-white px-4 sm:px-6 py-40 md:py-52 overflow-visible z-10 min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-10">
        {/* Left side - Text content */}
        <div className="relative z-10 max-w-xl md:text-left text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Marketplace <br />
            for{" "}
            <span
              className="font-bold text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #f97316 20%, #0f766e 80%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Visual Creatives
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-md">
            Hire top creative talent or showcase your skill and start earning.{" "}
            <br />
            Connect, create, and collaborate effortlessly.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-400 to-teal-700 text-black px-6 py-3 rounded font-bold transition hover:bg-teal-700"
            >
              Hire a Creative
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-700 text-white px-6 py-3 rounded font-bold transition duration-300 hover:bg-teal-800"
            >
              Join as a Creative
            </a>
          </div>
        </div>

        {/* Right side - Images */}
        <div className="relative flex gap-4 sm:gap-8 items-center justify-center flex-shrink-0">
          <div className="relative">
            <img
              src="/DSC01349.webp"
              alt="Creative 1"
              className="w-52 h-64 sm:w-60 sm:h-72 md:w-72 md:h-80 object-cover rounded-2xl shadow-2xl transform rotate-[-8deg]"
            />
          </div>
          <div className="relative">
            <img
              src="/DSC01618.png"
              alt="Creative 2"
              className="w-52 h-64 sm:w-60 sm:h-72 md:w-72 md:h-80 object-cover rounded-2xl shadow-2xl transform rotate-[8deg]"
              style={{
                marginLeft: "-12px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
