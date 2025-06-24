import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/aboutpage' },
    { name: 'Portfolio', path: '/portfoliopage' },
    { name: 'Project Details', path: '/projectdetailspage' },
    { name: 'Contact', path: '/contactpage' }
  ];

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" id="Header_2" className="flex items-center space-x-2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                id={`Header_${index + 3}`}
                className={`text-lg font-medium transition-all duration-300 hover:text-blue-600 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${location.pathname === link.path ? 'text-blue-600 after:scale-x-100' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            id="Header_8"
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div id="Header_9" className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4 absolute left-4 right-4 top-full">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                id={`Header_${index + 10}`}
                className={`block py-2 px-4 text-lg transition-colors duration-300 hover:bg-blue-50 rounded-md ${location.pathname === link.path ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;