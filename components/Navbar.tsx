
import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onLinkClick: (title: string) => void;
  onHomeClick: () => void;
  onStartConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLinkClick, onHomeClick, onStartConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', action: onHomeClick },
    { name: 'About Us', action: () => onLinkClick('About Fexi Us') },
    { name: 'Industries', action: onHomeClick },
    { name: 'Contact Us', action: () => onLinkClick('Direct Contact') },
  ];

  const handleNavAction = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  const handleConsultation = () => {
    onStartConsultation();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full relative z-[60]">
      {/* Top Bar */}
      <div className="bg-[#f2f8f4] py-2 px-6 hidden md:block border-b border-gray-100">
        <div className="max-w-[1320px] mx-auto flex justify-between items-center text-[13px] text-gray-700">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Mail className="w-4 h-4 text-blue-800" />
              <span className="hover:text-blue-800 transition-colors">support@fexi.us</span>
            </div>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Phone className="w-4 h-4 text-blue-800" />
              <span className="hover:text-blue-800 transition-colors">Inquire about Tax Services: +14073370900</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-white text-gray-700 px-4 py-1.5 border border-gray-100 hover:bg-gray-50 transition-colors text-xs font-medium">
              Tax Form
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'py-5'}`}>
        <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between">
          {/* Logo with uploaded image */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={onHomeClick}
          >
            <div className="relative w-14 h-14 overflow-hidden rounded-full border border-gray-50 bg-white flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <img src="https://i.postimg.cc/7hc0BgNM/White-and-Blue-Modern-Financial-Services-Logo-Design-(6).png" alt="Fexi Us Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold serif-font text-blue-900 leading-none tracking-tight">Fexi Us</span>
              <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mt-0.5">Tax Services</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-[15px] font-bold text-gray-700 hover:text-blue-800 transition-colors uppercase tracking-widest"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <button 
              onClick={handleConsultation}
              className="hidden lg:flex bg-blue-900 hover:bg-gray-900 text-white px-8 py-3.5 rounded-sm items-center text-[13px] font-bold tracking-widest transition-all duration-300 group uppercase"
            >
              Start Free Consultation
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors ml-4"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen border-t border-gray-100 py-6' : 'max-h-0'}`}>
          <ul className="flex flex-col space-y-4 px-6 text-base font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
                <button 
                  onClick={() => handleNavAction(item.action)}
                  className="w-full text-left py-2 text-lg font-bold serif-font border-b border-gray-50 hover:text-blue-800"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li className="pt-4">
              <button 
                onClick={handleConsultation}
                className="w-full bg-blue-900 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-sm"
              >
                Start Free Consultation
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
