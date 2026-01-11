
import React, { useState, useEffect } from 'react';
import { Mail, Phone, ChevronDown, Twitter, Facebook, Instagram, Linkedin, MessageCircle, ArrowRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full relative z-[60]">
      {/* Top Bar */}
      <div className={`bg-[#fdfaf9] border-b border-gray-100 py-3 px-6 hidden md:block transition-all duration-500 origin-top ${isScrolled ? 'scale-y-0 h-0 py-0 opacity-0' : 'scale-y-100 h-auto opacity-100'}`}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-[12px] font-medium text-gray-500 tracking-wide">
          <div className="flex items-center space-x-10">
            <div className="flex items-center space-x-2.5 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center transition-colors group-hover:bg-green-100">
                <Mail className="w-3.5 h-3.5 text-green-500" />
              </div>
              <span className="group-hover:text-green-600 transition-colors">hello@fint.com</span>
            </div>
            <div className="flex items-center space-x-2.5 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center transition-colors group-hover:bg-green-100">
                <Phone className="w-3.5 h-3.5 text-green-500" />
              </div>
              <span className="group-hover:text-green-600 transition-colors">Tax Inquiries: +1 323 132 4235</span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-5 border-r pr-8 border-gray-200">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <Icon key={i} className="w-4 h-4 hover:text-green-500 hover:-translate-y-0.5 transition-all cursor-pointer opacity-70 hover:opacity-100" />
              ))}
            </div>
            <button className="text-gray-700 font-bold uppercase tracking-[0.15em] hover:text-green-600 transition-colors text-[10px]">
              Tax Form Center
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`px-6 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl py-4' : 'bg-white py-7 border-b border-gray-50'}`}>
        <div className="max-w-[1400px] mx-auto flex items-center">
          {/* Logo - Fixed on Left */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center text-white font-bold text-2xl italic group-hover:rotate-[360deg] transition-transform duration-1000 shadow-lg shadow-red-200">
              F
            </div>
            <span className="text-4xl font-bold serif-font text-gray-900 tracking-tight">Fint</span>
          </div>

          {/* Navigation Links - Aligned to Right */}
          <ul className="hidden lg:flex items-center space-x-12 text-[14px] font-bold uppercase tracking-widest text-gray-600 ml-auto mr-12">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="relative group py-2">
                <a 
                  href={link.href} 
                  className={`flex items-center transition-all duration-300 ${link.current ? 'text-red-400' : 'hover:text-green-600'}`}
                >
                  {link.name}
                  {['Home', 'About Us', 'Services', 'Industries', 'Blog'].includes(link.name) && (
                    <ChevronDown className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-300 opacity-60" />
                  )}
                </a>
                <span className={`absolute bottom-0 left-0 h-[3px] bg-green-500 transition-all duration-300 ${link.current ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <button className="hidden lg:flex bg-red-400 hover:bg-gray-900 text-white px-9 py-4 rounded-sm items-center text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-500 group shadow-lg shadow-red-100 hover:shadow-gray-200 hover:-translate-y-1">
              Tax Payment
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-8' : 'max-h-0'}`}>
          <ul className="flex flex-col items-center space-y-6 text-sm font-bold uppercase tracking-widest text-gray-700">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={link.current ? 'text-red-400' : ''}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
