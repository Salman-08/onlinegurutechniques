import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import Font Awesome 'fa-bars' icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // toggle the menu visibility
  };

  return (
    <header className="bg-gray text-black">
      <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-xl font-bold">
            <a href="/" className="text-black hover:text-orange">
              OnlineGuruTechniques
            </a>
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-black font-semibold hover:text-orange border-b-2 border-transparent hover:border-orange transition-all duration-500 ease-in-out">Home</a>
            <a href="#services" className="text-black font-semibold hover:text-orange border-b-2 border-transparent hover:border-orange transition-all duration-500 ease-in-out">Services</a>
            <a href="#about" className="text-black font-semibold hover:text-orange border-b-2 border-transparent hover:border-orange transition-all duration-500 ease-in-out">About</a>
            <a href="#contact" className="text-black font-semibold hover:text-orange border-b-2 border-transparent hover:border-orange transition-all duration-500 ease-in-out">Contact</a>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-black"
              aria-label="Open Menu"
              onClick={toggleMenu} // toggle the menu on click
            >
              <FaBars className="w-6 h-6" /> {/* Font Awesome hamburger icon */}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" className="text-black font-semibold hover:text-orange">Home</a>
            <a href="#services" className="text-black font-semibold hover:text-orange">Services</a>
            <a href="#about" className="text-black font-semibold hover:text-orange">About</a>
            <a href="#contact" className="text-black font-semibold hover:text-orange">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
