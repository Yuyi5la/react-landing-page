import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold">
            Pic<span className="text-orange-500">Me</span>
          </h2>
          <p className="mt-2 text-white">
            A marketplace for visual creatives
          </p>
          <div className="mt-6 flex items-center text-sm text-white gap-2">
            <span className="text-yellow-400">📍</span>
            <p>Benin City, Edo State, Nigeria.</p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-white text-sm">
            <li>
              <a href="#home" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#pages" className="hover:text-white">Pages</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">About Us</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">Services</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">📞</span>
              0901 234 5678
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-400">✉️</span>
              <a
                href="mailto:info@picmedigitalsolution.com"
                className="hover:text-white"
              >
                info@picmedigitalsolution.com
              </a>
            </li>
          </ul>
        </div>

        {/* Downloads & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download</h3>
          <div className="space-y-3">
            <a href="#" className="block w-fit">
              <img
                src="/app-store.png"
                alt="App Store"
                className="w-36"
              />
            </a>
            <a href="#" className="block w-fit">
              <img
                src="/play-store.png"
                alt="Play Store"
                className="w-36"
              />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-white text-xl">
            <a href="#" aria-label="X">
              <i className="fab fa-x-twitter" />
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white my-8" />

      {/* Copyright */}
      <p className="text-center text-white text-sm">
        © 2025 PicMe. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
