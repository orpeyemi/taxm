
import React from 'react';
import { Industry } from '../types';
import { INDUSTRIES } from '../constants';

interface IndustryGridProps {
  onSelectIndustry: (industry: Industry) => void;
}

export const IndustryGrid: React.FC<IndustryGridProps> = ({ onSelectIndustry }) => {
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-gray-900 serif-font mb-10 reveal tracking-tight">Industries We Serve</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {INDUSTRIES.map((industry, index) => (
          <button
            key={industry.id}
            onClick={() => onSelectIndustry(industry)}
            style={{ transitionDelay: `${index * 50}ms` }}
            className={`
              reveal h-40 p-8 flex flex-col items-center justify-center text-2xl font-bold serif-font transition-all duration-500 rounded-sm
              ${industry.isActive ? 'bg-accent-green border-l-4 border-green-800' : 'bg-[#fcfcfc] border border-gray-100 border-l-[6px] border-l-[#fb923c] hover:bg-white hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2'}
              text-gray-900 group relative overflow-hidden text-center
            `}
          >
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-500">{industry.name}</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center text-[10px] uppercase tracking-[0.2em] text-orange-500 font-bold">
              View Tax Strategy
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
