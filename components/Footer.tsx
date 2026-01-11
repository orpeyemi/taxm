
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-1">
             <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center text-white font-bold text-xl italic shadow-md">F</div>
              <span className="text-3xl font-bold serif-font tracking-tight text-gray-900">Fint</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-8 pr-6">
              Empowering businesses through specialized financial intelligence and comprehensive tax strategies. Your partner in long-term growth.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-bold text-gray-900 uppercase tracking-[0.25em] mb-10">Company</h4>
            <ul className="space-y-5">
              {['About Fint', 'Case Studies', 'Executive Team', 'Common FAQ', 'Career Opportunities'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-green-600 transition-all text-[15px] font-medium hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-bold text-gray-900 uppercase tracking-[0.25em] mb-10">Services</h4>
            <ul className="space-y-5">
              {['Payroll Solutions', 'Personal Returns', 'Business Registration', 'Managed Bookkeeping', 'Corporate Strategy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-green-600 transition-all text-[15px] font-medium hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-bold text-gray-900 uppercase tracking-[0.25em] mb-10">Connect</h4>
            <ul className="space-y-5">
              {['Market Blog', 'Industry Insights', 'Privacy Protocol', 'Client Terms', 'Direct Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-green-600 transition-all text-[15px] font-medium hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-gray-400 font-medium">
            © {new Date().getFullYear()} <span className="text-gray-900 font-bold">Fint</span>. Developed by EnvyTheme with Professional Precision.
          </p>
          <div className="flex items-center space-x-10 text-[12px] font-bold uppercase tracking-widest text-gray-400">
             <a href="#" className="hover:text-green-600 transition-colors">Digital Privacy</a>
             <a href="#" className="hover:text-green-600 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
