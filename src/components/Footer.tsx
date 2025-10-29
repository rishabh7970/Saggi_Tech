import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo size="lg" className="mb-4" />
            <p className="text-gray-300 mb-4">
              Precision in Metal. Excellence in Manufacturing. Your trusted partner for high-precision sheet metal and tubular parts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link>
              <Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</Link>
              <Link to="/industries" className="text-gray-300 hover:text-orange-500 transition-colors">Industries</Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-orange-500 transition-colors">Portfolio</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="flex flex-col space-y-2 text-gray-300">
              <span>Laser Cutting</span>
              <span>CNC Bending</span>
              <span>Tube Fabrication</span>
              <span>Welding Services</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>01244389660</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>saggitechindia@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span>479, Street no. 7, Kadipur Ind. Area, Patadi Road, Gurugram-122001</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock size={16} />
                <span>10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SAGGI TECH. All rights reserved. | Built for precision manufacturing excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;