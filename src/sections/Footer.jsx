import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-start gap-4 lg:gap-0">
  {/* Logo Section */}
  <div className="flex-1 min-w-[180px]">
    <h2 className="text-3xl font-bold">
      Pic<span className="text-orange-500">Me</span>
    </h2>
    <p className="mt-2 text-white">
      A marketplace for visual creatives
    </p>
  </div>

  {/* Navigation */}
  <div className="flex-1 min-w-[180px] ml-4">
    <h3 className="text-lg font-semibold mb-4">Navigation</h3>
    <ul className="space-y-2 text-white text-sm">
      <li><a href="#home" className="hover:text-white">Home</a></li>
      <li><a href="#pages" className="hover:text-white">Pages</a></li>
      <li><a href="#about" className="hover:text-white">About Us</a></li>
      <li><a href="#services" className="hover:text-white">Services</a></li>
    </ul>
  </div>

  {/* Downloads & Socials */}
  <div className="flex-1 min-w-[220px] lg:ml-auto">
    <h3 className="text-lg font-semibold mb-4">Download</h3>
    <div className="space-y-3">
      <a href="#" className="block w-fit">
        <img src="/app-store.png" alt="App Store" className="w-36" />
      </a>
      <a href="#" className="block w-fit">
        <img src="/play-store.png" alt="Play Store" className="w-36" />
      </a>
    </div>
    <div className="flex gap-4 mt-6 text-white text-xl">
      <a href="#" aria-label="X"><i className="fab fa-x-twitter" /></a>
      <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
      <a href="#" aria-label="YouTube"><i className="fab fa-youtube" /></a>
    </div>
  </div>
</div>

      {/* 📞 Contact Row Below the Grid */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 text-sm text-white">
        <div className="flex items-center gap-0">
          <MapPinIcon className="h-5 w-5 text-yellow-400" />
          <span>Benin City, Edo State, Nigeria</span>
        </div>
        <div className="flex items-center gap-0">
          <PhoneIcon className="h-5 w-5 text-yellow-400" />
          <span>0901 234 5678</span>
        </div>
         <div className="flex items-center gap-2">
          <EnvelopeIcon className="h-5 w-5 text-yellow-400" />
          <a
            href="mailto:info@picmedigitalsolution.com"
            className="hover:text-white"
          >
            info@picmedigitalsolution.com
          </a>
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
