import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import {
  FaApple,
  FaGooglePlay,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaThreads,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div>
            <h2 className="text-3xl font-bold">
              Pic<span className="text-orange-500">Me</span>
            </h2>
            <p className="text-gray-400 mt-2">
              A marketplace for visual creatives
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ContactUs" className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-orange-500">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Download + Social Icons */}
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
              <a
                href="https://x.com/picmedigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaXTwitter className="text-xl" />
              </a>

              <a
                href="https://www.instagram.com/picmedigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaInstagram className="text-xl" />
              </a>

              <a
                href="https://www.tiktok.com/@picmedigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaTiktok className="text-xl" />
              </a>

                <a
                href="https://www.threads.com/@picmedigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaThreads className="text-xl" />
              </a>

              <a
                href="https://www.facebook.com/share/1CHxTjqUAF/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaFacebook className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/company/picmedigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="https://www.youtube.com/@picmedigital"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                <FaYoutube className="text-xl" />
              </a>

            </div>
          </div>
        </div>


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
            <span>tech@picmedigital.com</span>
          </div>
        </div>

        
        <div className="flex justify-center items-center gap-3 text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
          <span>© 2025 PicMe. All Rights Reserved</span>
          <span>|</span>
          <Link to="/privacy-policy" className="hover:text-orange-500">
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
