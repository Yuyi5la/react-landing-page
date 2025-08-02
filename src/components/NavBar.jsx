const NavBar =() =>{
    return(
   <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold text-gray-800">
          Pic<span className="text-orange-500">Me</span>
        </div>


        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-orange-500">Home</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contact Us</a></li>
          <li><a href="#faqs" className="hover:text-orange-500">FAQs</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;