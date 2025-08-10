import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import {
  FaApple,
  FaGooglePlay,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Tagline */}
          <div>
            <h2 className="text-3xl font-bold">
              Pic<span className="text-orange-500">Me</span>
            </h2>
            <p className="text-gray-400 mt-2">A marketplace for visual creatives</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home">Home</a></li>
              {/*<li><a href="#">Pages</a></li>*/}
              <li><a href="#contact">contact Us</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          {/* Download + Social Icons aligned right */}
          <div className="md:ml-auto">
            <h3 className="text-lg font-semibold mb-4">Download</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded shadow-md w-fit text-sm"
              >
                <FaApple className="text-lg" />
                App Store
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded shadow-md w-fit text-sm"
              >
                <FaGooglePlay className="text-lg" />
                Play Store
              </a>
            </div>
            <div className="flex gap-4 mt-6 text-white">
              <FaXTwitter className="text-xl" />
              <FaInstagram className="text-xl" />
              <FaYoutube className="text-xl" />
            </div>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-300 mt-10">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5 text-yellow-400" />
            <span>Benin City, Edo State, Nigeria.</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-yellow-400" />
            <span>08034031530</span>
          </div>
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="h-5 w-5 text-yellow-400" />
            <span>picmedigital@gmail.com</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
          © 2025 PicMe. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
