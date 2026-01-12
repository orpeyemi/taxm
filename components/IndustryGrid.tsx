
import React from 'react';
import { Industry } from '../types';
import { INDUSTRIES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface IndustryGridProps {
  onSelectIndustry: (industry: Industry) => void;
}

export const IndustryGrid: React.FC<IndustryGridProps> = ({ onSelectIndustry }) => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {INDUSTRIES.map((industry, index) => {
          // Dynamically get the icon component
          const IconComponent = (LucideIcons as any)[industry.icon] || LucideIcons.HelpCircle;
          
          return (
            <div
              key={industry.id}
              onClick={() => onSelectIndustry(industry)}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`
                reveal group relative p-10 bg-white border border-gray-100 rounded-sm cursor-pointer
                transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1
                ${industry.isActive ? 'ring-2 ring-blue-900 ring-offset-4' : ''}
              `}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-[#f2f8f4] text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500 rounded-lg">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 serif-font mb-4 tracking-tight group-hover:text-blue-900 transition-colors">
                  {industry.name}
                </h3>
                
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                  {industry.description}
                </p>
                
                <div className="mt-auto flex items-center text-[12px] font-bold text-blue-900 uppercase tracking-widest border-t border-gray-50 pt-6 group-hover:text-blue-700">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-2 h-0 bg-blue-900 transition-all duration-500 group-hover:h-12"></div>
              <div className="absolute top-0 right-0 h-2 w-0 bg-blue-900 transition-all duration-500 group-hover:w-12"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};