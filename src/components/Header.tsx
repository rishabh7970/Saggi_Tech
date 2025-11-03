import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logoImg from '../pages/PHOTOS/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Products', href: '/products' },
    { name: 'Quality', href: '/quality' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (  
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:01244389660" aria-label="Call 01244389660" className="flex items-center space-x-2 hover:text-orange-400">
              <Phone size={14} />
              <span>01244389660</span>
            </a>
            <a href="mailto:saggitechindia@gmail.com" aria-label="Email saggitechindia@gmail.com" className="flex items-center space-x-2 hover:text-orange-400">
              <Mail size={14} />
              <span>saggitechindia@gmail.com</span>
            </a>
          </div>
          {/* <Link 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded text-white font-medium transition-colors"
          >
            Request Quote
          </Link> */}
          </div>
      </div>
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5 md:py-6">
          {/* Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4">
              <img src={logoImg} alt="SAGGI TECH Logo" className="h-16 md:h-20 w-auto" />
              <div className="inline-block leading-tight select-none" style={{fontFamily: 'Poppins, ui-sans-serif'}}>
                <div className="text-[2.25rem] md:text-[3.375rem] font-extrabold tracking-wide">
                  <span>SAGGI </span>
                  <span className="text-orange-500">TECH</span>
                </div>
                <div className="relative mt-1">
                  <div className="h-[2px] bg-orange-500 w-full"></div>
                  <div className="absolute inset-0 -top-2 flex justify-center">
                    <span className="px-2 text-[10px] md:text-xs text-gray-300 uppercase tracking-wider bg-gray-900">SUCCESOR OF ACE TECHNO ENGINEERS</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-orange-500'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div 
          className={`md:hidden fixed inset-0 z-50 bg-gray-900 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="px-4 py-6 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                  <img src={logoImg} alt="SAGGI TECH Logo" className="h-12 w-auto" />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white hover:text-orange-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <nav className="flex-1 px-4 py-6 overflow-y-auto">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-orange-500 text-white'
                        : 'text-white hover:bg-gray-800 hover:text-orange-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
            {/* Mobile menu footer */}
            <div className="px-4 py-6 border-t border-gray-800">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-orange-500" />
                  <a href="tel:01244389660" className="text-white hover:text-orange-500 transition-colors">
                    01244389660
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-orange-500" />
                  <a href="mailto:saggitechindia@gmail.com" className="text-white hover:text-orange-500 transition-colors">
                    saggitechindia@gmail.com
                  </a>
                </div>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-lg text-white font-medium transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;