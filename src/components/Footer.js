import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-12" data-aos="fade-up" >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-lg">
              OnlineGuruTechniques is a platform dedicated to helping students with coding, project development, and tech support.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-orange">Home</a></li>
              <li><a href="#services" className="hover:text-orange">Services</a></li>
              <li><a href="#about" className="hover:text-orange">About</a></li>
              <li><a href="#contact" className="hover:text-orange">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-lg">
              <span className="font-bold">Email:</span> onlinegurutechniques@gmail.com
            </p>
            <p className="text-lg">
              <span className="font-bold">Phone:</span> +1 (123) 456-7890
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} OnlineGuruTechniques. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
