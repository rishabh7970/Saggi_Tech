import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import logoImg from '../pages/PHOTOS/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Add a soft, diffused shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (  
    <header className="sticky top-0 z-50">
      
      {/* Top micro-bar: Sleek dark slate to anchor the bright header */}
      <div className="bg-slate-900 py-2 hidden sm:block text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[11px] font-semibold uppercase tracking-widest">
          <div className="flex items-center space-x-8">
            <a href="tel:01244389660" className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
              <Phone size={12} />
              <span>01244389660</span>
            </a>
            <a href="mailto:saggitechindia@gmail.com" className="flex items-center space-x-2 hover:text-white transition-colors duration-300">
              <Mail size={12} />
              <span>saggitechindia@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center">
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>

      {/* Main navigation: Crisp White with subtle glass effect */}
      <div className={`bg-white/95 backdrop-blur-xl transition-all duration-300 border-b ${scrolled ? 'border-transparent shadow-sm' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Brand Lockup */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center space-x-4 group">
                <img src={logoImg} alt="SAGGI TECH Logo" className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
                
                <div className="flex flex-col justify-center">
                  <div className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 leading-none flex items-baseline space-x-1">
                    <span>SAGGI</span>
                    {/* Vibrant eye-catching orange */}
                    <span className="text-orange-600 font-bold">TECH</span>
                  </div>
                  <div className="text-[0.55rem] md:text-[0.65rem] text-slate-500 font-bold tracking-[0.2em] uppercase mt-1">
                    Successor of Ace Techno Engineers
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm tracking-wide transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-orange-600 font-bold'
                      : 'text-slate-600 font-medium hover:text-orange-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA: Vibrant, shadow-elevated button */}
            <div className="hidden md:flex items-center">
               <Link 
                  to="/contact" 
                  className="group flex items-center space-x-2 bg-orange-600 text-white px-6 py-2.5 rounded-md text-sm font-bold shadow-md shadow-orange-600/20 transition-all hover:shadow-orange-600/40 hover:-translate-y-0.5"
                >
                  <span>Request Quote</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-900 hover:text-orange-600 transition-colors focus:outline-none"
              >
                {isMenuOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-slate-100 bg-slate-50">
            <span className="text-lg font-extrabold text-slate-900 tracking-tight flex items-baseline">
              SAGGI <span className="text-orange-600 ml-1">TECH</span>
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-500 hover:text-orange-600 transition-colors"
            >
              <X size={24} strokeWidth={2} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex-1 px-4 py-8 overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-lg tracking-wide transition-colors ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-orange-50 font-bold'
                      : 'text-slate-700 font-medium hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Footer / CTA */}
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <div className="flex flex-col space-y-4 mb-6 text-sm font-medium tracking-wide">
              <a href="tel:01244389660" className="flex items-center space-x-3 text-slate-600 hover:text-orange-600 transition-colors">
                <Phone size={18} className="text-orange-600" />
                <span>01244389660</span>
              </a>
              <a href="mailto:saggitechindia@gmail.com" className="flex items-center space-x-3 text-slate-600 hover:text-orange-600 transition-colors">
                <Mail size={18} className="text-orange-600" />
                <span>saggitechindia@gmail.com</span>
              </a>
            </div>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="flex justify-center items-center w-full bg-orange-600 text-white px-4 py-4 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors shadow-md shadow-orange-600/20"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;