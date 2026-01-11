
import React from 'react';

const stats = [
  { label: 'BUSINESS SERVED', value: '435' },
  { label: 'TAX FORM PREPARED', value: '1434' },
  { label: 'PAYROLL SETUP', value: '700' },
  { label: '$ SAVED EARLY', value: '443K' },
  { label: 'TAX PROFESSIONALS', value: '150+' },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center group reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="text-7xl font-bold serif-font text-gray-900 mb-5 transition-all duration-700 group-hover:scale-110 group-hover:text-green-500 tracking-tighter">
                {stat.value}
              </div>
              <div className="relative inline-block">
                <div className="text-[12px] font-bold tracking-[0.3em] text-gray-400 uppercase transition-colors duration-500 group-hover:text-gray-900">
                  {stat.label}
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-green-400 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
