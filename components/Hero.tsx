
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#9de0ad] py-20 px-6 overflow-hidden">
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="z-10 relative">
          {/* Vertical line from screenshot */}
          <div className="absolute -left-8 top-0 bottom-0 w-[5px] bg-white hidden lg:block rounded-full"></div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 serif-font mb-4 tracking-tight">
            Our Industries
          </h1>
          <nav className="text-gray-900 text-sm font-semibold flex items-center">
            <span className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer">Home</span>
            <span className="mx-3 text-gray-700 opacity-60">-</span>
            <span>Our Industries</span>
          </nav>
        </div>
        
        <div className="mt-12 lg:mt-0 relative">
          {/* The hand-drawn doodle illustration from screenshot */}
          <div className="relative w-full max-w-[500px]">
            <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-xl">
              {/* Paper / Charts Doodle */}
              <rect x="280" y="160" width="100" height="120" rx="4" fill="white" transform="rotate(-5)" stroke="#1a2e1f" strokeWidth="1.5"/>
              <rect x="290" y="175" width="80" height="40" fill="#f8f9fa" />
              <path d="M295 200 L320 185 L345 205 L365 190" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="295" y="225" width="70" height="4" rx="2" fill="#e5e7eb" />
              <rect x="295" y="235" width="70" height="4" rx="2" fill="#e5e7eb" />
              <rect x="295" y="245" width="50" height="4" rx="2" fill="#e5e7eb" />

              {/* Document with Bars */}
              <rect x="310" y="180" width="110" height="140" rx="4" fill="white" stroke="#1a2e1f" strokeWidth="1.5"/>
              <rect x="325" y="200" width="80" height="8" rx="2" fill="#f3f4f6" />
              <rect x="325" y="215" width="15" height="40" fill="#fb923c" />
              <rect x="345" y="230" width="15" height="25" fill="#fb923c" />
              <rect x="365" y="205" width="15" height="50" fill="#fb923c" />
              <rect x="385" y="220" width="15" height="35" fill="#fb923c" />
              <rect x="325" y="270" width="25" height="20" fill="#3b82f6" />
              <rect x="355" y="270" width="25" height="20" fill="#10b981" />
              <rect x="385" y="270" width="25" height="20" fill="#3b82f6" />

              {/* Pie Chart Paper */}
              <rect x="270" y="140" width="80" height="100" rx="4" fill="white" stroke="#1a2e1f" strokeWidth="1.5" transform="rotate(5)"/>
              <circle cx="310" cy="180" r="20" fill="#3b82f6" transform="rotate(5)"/>
              <path d="M310 180 L310 160 A20 20 0 0 1 330 180 Z" fill="#eab308" transform="rotate(5)"/>
              <rect x="285" y="210" width="50" height="3" rx="1.5" fill="#e5e7eb" transform="rotate(5)"/>
              <rect x="285" y="220" width="50" height="3" rx="1.5" fill="#e5e7eb" transform="rotate(5)"/>

              {/* Calculator Doodle */}
              <rect x="260" y="260" width="60" height="80" rx="8" fill="#1e3a8a" stroke="#1a2e1f" strokeWidth="1.5"/>
              <rect x="270" y="270" width="40" height="15" rx="2" fill="#e2e8f0" />
              <text x="275" y="281" fill="#1e293b" fontSize="8" fontWeight="bold">0.00</text>
              <rect x="270" y="295" width="10" height="8" rx="2" fill="white" opacity="0.2" />
              <rect x="285" y="295" width="10" height="8" rx="2" fill="white" opacity="0.2" />
              <rect x="300" y="295" width="10" height="8" rx="2" fill="white" opacity="0.2" />
              <rect x="270" y="310" width="10" height="8" rx="2" fill="white" opacity="0.2" />
              <rect x="285" y="310" width="10" height="8" rx="2" fill="white" opacity="0.2" />
              <rect x="300" y="310" width="10" height="8" rx="2" fill="white" opacity="0.2" />

              {/* Pencils and Magnifying Glass */}
              <path d="M360 140 L380 180" stroke="#f87171" strokeWidth="4" strokeLinecap="round" transform="rotate(-30, 370, 160)"/>
              <path d="M255 230 L285 270" stroke="#facc15" strokeWidth="4" strokeLinecap="round" transform="rotate(15, 270, 250)"/>
              <circle cx="370" cy="270" r="15" stroke="#1a2e1f" strokeWidth="2" fill="white" opacity="0.3"/>
              <path d="M380 280 L395 305" stroke="#1a2e1f" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="378" cy="262" r="4" fill="#fb923c" />
              <text x="375" y="265" fill="white" fontSize="4" fontWeight="bold">$</text>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Subtle floating blobs from screenshot */}
      <div className="absolute top-[20%] left-[30%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-[10%] right-[40%] w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-[10%] right-[10%] w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
    </div>
  );
};
