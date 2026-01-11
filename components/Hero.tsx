
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#86efac] via-[#4ade80] to-[#22c55e] py-32 px-6 overflow-hidden grain">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="z-10 text-center lg:text-left">
          <div className="w-1.5 h-16 bg-white mb-8 mx-auto lg:mx-0 animate-[bounce_4s_infinite] hidden lg:block rounded-full"></div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 serif-font mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] tracking-tight">
            Our Industries
          </h1>
          <nav className="text-gray-900 text-[15px] font-bold uppercase tracking-[0.3em] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] flex justify-center lg:justify-start items-center">
            <span className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">Home</span>
            <span className="mx-4 opacity-40">/</span>
            <span className="text-white">Our Industries</span>
          </nav>
        </div>
        
        <div className="mt-20 lg:mt-0 lg:ml-20 opacity-0 animate-[fadeInScale_1s_ease-out_0.4s_forwards]">
          {/* Refined Illustration Mockup */}
          <div className="bg-white/20 backdrop-blur-2xl p-12 rounded-[2.5rem] border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] relative animate-float">
             <div className="flex space-x-8 mb-8">
               <div className="w-24 h-28 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center space-y-4 transform -rotate-6 hover:rotate-0 transition-all duration-500 cursor-pointer p-2">
                 <div className="w-12 h-2 bg-blue-400 rounded-full"></div>
                 <div className="w-12 h-1.5 bg-blue-100 rounded-full"></div>
                 <div className="w-12 h-1.5 bg-blue-100 rounded-full"></div>
                 <div className="w-12 h-1.5 bg-blue-100 rounded-full"></div>
               </div>
               <div className="w-32 h-36 bg-white rounded-2xl shadow-xl p-5 transform rotate-6 hover:rotate-0 transition-all duration-500 cursor-pointer border border-gray-50">
                  <div className="w-full h-12 bg-orange-50 mb-4 rounded-xl flex items-center justify-center">
                    <div className="w-12 h-1 bg-orange-200 rounded-full"></div>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 mb-2.5 rounded-full"></div>
                  <div className="w-full h-1.5 bg-gray-100 mb-2.5 rounded-full"></div>
                  <div className="w-3/4 h-1.5 bg-gray-100 rounded-full"></div>
               </div>
             </div>
             
             <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-600 rounded-full border-[6px] border-white shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] flex items-center justify-center text-white font-bold text-3xl hover:scale-110 transition-transform cursor-pointer">
               $
             </div>
             
             <div className="absolute -top-6 -left-8 w-16 h-16 bg-yellow-400 rounded-2xl transform rotate-[15deg] shadow-2xl flex items-center justify-center text-2xl font-bold text-gray-900 border-4 border-white">
               ★
             </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-[15%] w-48 h-48 bg-white/20 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-green-200/40 rounded-full blur-[100px] animate-[pulse_8s_infinite]"></div>
    </div>
  );
};
