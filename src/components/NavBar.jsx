import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Pic<span className="text-orange-500">Me</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
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
      </nav>
    </header>
  );
};

export default NavBar;
