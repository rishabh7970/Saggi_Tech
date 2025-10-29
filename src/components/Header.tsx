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
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>01244389660</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>saggitechindia@gmail.com</span>
            </div>
          </div>
          <Link 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded text-white font-medium transition-colors"
          >
            Request Quote
          </Link>
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
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
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
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;