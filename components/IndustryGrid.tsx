
import React from 'react';
import { Industry } from '../types';
import { INDUSTRIES } from '../constants';

interface IndustryGridProps {
  onSelectIndustry: (industry: Industry) => void;
}

export const IndustryGrid: React.FC<IndustryGridProps> = ({ onSelectIndustry }) => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-gray-900 serif-font mb-8 reveal tracking-tight">Industries We Serve</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.map((industry, index) => (
          <button
            key={industry.id}
            onClick={() => onSelectIndustry(industry)}
            style={{ transitionDelay: `${index * 30}ms` }}
            className={`
              reveal h-28 p-6 flex items-center justify-center text-xl font-bold serif-font transition-all duration-300 rounded-sm
              ${industry.isActive ? 'bg-[#bbf7d0] border-l-4 border-[#166534]' : 'bg-[#f8f9fa] border-l-[4px] border-l-transparent hover:border-l-[#fb923c] hover:bg-white hover:shadow-lg'}
              text-gray-900 text-center
            `}
          >
            {industry.name}
          </button>
        ))}
      </div>
    </div>
  );
};
