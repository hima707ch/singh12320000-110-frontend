import React from 'react';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id="Footer_2">
            <h3 className="text-xl font-semibold mb-4">Dream Home</h3>
            <p className="text-gray-400">Finding your perfect property match.</p>
          </div>
          
          <div id="Footer_3">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div id="Footer_4">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Property Street</li>
              <li>Real Estate City, RE 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@dreamhome.com</li>
            </ul>
          </div>
          
          <div id="Footer_5">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p id="Footer_6">&copy; 2024 Dream Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;