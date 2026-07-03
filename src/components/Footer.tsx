import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from './Logo'; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand & Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed pr-4">
              Precision in Metal. Excellence in Manufacturing. Your trusted partner for high-precision sheet metal and tubular parts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[0.65rem] font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {['About Us', 'Services', 'Industries', 'Portfolio'].map((link, index) => (
                <Link 
                  key={index}
                  to={`/${link.toLowerCase().replace(' ', '-')}`} 
                  className="text-slate-600 text-sm font-medium hover:text-orange-600 transition-colors duration-300 w-fit"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[0.65rem] font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">
              Core Services
            </h3>
            <div className="flex flex-col space-y-3">
              {['Laser Cutting', 'CNC Bending', 'Tube Fabrication', 'Welding Services'].map((service, index) => (
                <span 
                  key={index} 
                  className="text-slate-600 text-sm font-medium cursor-default hover:text-orange-600 transition-colors duration-300 w-fit"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[0.65rem] font-bold text-slate-900 uppercase tracking-[0.2em] mb-6">
              Contact Info
            </h3>
            <div className="flex flex-col space-y-4">
              
              <a href="tel:01244389660" className="group flex items-start space-x-3 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors duration-300 w-fit">
                <Phone size={16} className="mt-0.5 text-orange-500" strokeWidth={2} />
                <span>01244389660</span>
              </a>
              
              <a href="mailto:saggitechindia@gmail.com" className="group flex items-start space-x-3 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors duration-300 w-fit">
                <Mail size={16} className="mt-0.5 text-orange-500" strokeWidth={2} />
                <span>saggitechindia@gmail.com</span>
              </a>
              
              <div className="group flex items-start space-x-3 text-sm font-medium text-slate-600 transition-colors duration-300">
                <MapPin size={16} className="mt-0.5 text-orange-500 flex-shrink-0" strokeWidth={2} />
                <span className="leading-relaxed group-hover:text-orange-600 transition-colors">
                  479, Street no. 7, Kadipur Ind. Area,<br />Patadi Road, Gurugram-122001
                </span>
              </div>
              
              <div className="group flex items-start space-x-3 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors duration-300 w-fit">
                <Clock size={16} className="mt-0.5 text-orange-500" strokeWidth={2} />
                <span>10:00 AM - 6:00 PM</span>
              </div>
              
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[0.65rem] text-slate-500 uppercase tracking-widest font-bold">
            <p>&copy; {currentYear} SAGGI TECH. All rights reserved.</p>
            <p>Built for precision manufacturing excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;