
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export const CTABanner: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 mb-32">
      <div className="relative bg-[#f1f6c8] rounded-[2rem] p-16 md:p-24 overflow-hidden flex flex-col lg:flex-row items-center justify-between border border-gray-100">
        {/* Abstract Background Elements */}
        <div className="absolute -top-20 -right-20 opacity-[0.05] pointer-events-none transform rotate-12">
          <svg width="600" height="600" viewBox="0 0 200 200">
            <rect x="20" y="20" width="160" height="160" fill="#1a2e1f" rx="40" />
            <circle cx="150" cy="50" r="40" fill="#1a2e1f" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl text-center lg:text-left">
          <div className="inline-block px-5 py-1.5 bg-[#1a2e1f] text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-8 rounded-full">
            Industry Leaders
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold serif-font text-gray-900 leading-[1.1] mb-12 tracking-tight">
            Elevate Your Financial Strategy With Fint CPA Expert Services!
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-10 justify-center lg:justify-start">
            <button className="bg-[#1a2e1f] text-white px-12 py-5 rounded-full font-bold flex items-center text-[13px] uppercase tracking-[0.2em] hover:bg-green-600 transition-all duration-500 group shadow-2xl shadow-gray-300 hover:shadow-green-200 hover:-translate-y-1">
              Start Free Consultation
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border-2 border-[#1a2e1f]/10 flex items-center justify-center transition-all duration-500 group-hover:border-green-500 group-hover:bg-green-50">
                <Phone className="w-6 h-6 text-gray-900 group-hover:text-green-600 transition-colors" />
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mb-1">Expert Support</p>
                <p className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">+321 4356 6789</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Abstract Shape */}
        <div className="hidden lg:block relative w-80 h-80 ml-10">
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/40 to-white/0 rounded-[3rem] backdrop-blur-sm border border-white/40 shadow-xl flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-white rounded-2xl shadow-inner p-8 flex flex-col justify-between overflow-hidden">
                <div className="space-y-3">
                  <div className="w-full h-2 bg-green-100 rounded-full"></div>
                  <div className="w-2/3 h-2 bg-green-100 rounded-full"></div>
                </div>
                <div className="flex justify-end">
                   <div className="w-12 h-12 bg-red-400 rounded-lg"></div>
                </div>
              </div>
           </div>
           <div className="absolute -bottom-4 -left-10 w-24 h-2 bg-gray-900/10 rotate-[35deg] rounded-full"></div>
           <div className="absolute -top-6 left-10 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};
