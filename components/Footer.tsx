
import React from 'react';

interface FooterProps {
  onLinkClick: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-1">
             <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-md border border-gray-100">
                <img src="https://i.postimg.cc/7hc0BgNM/White-and-Blue-Modern-Financial-Services-Logo-Design-(6).png" alt="Fexi Us" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold serif-font tracking-tight text-gray-900">Fexi Us</span>
                <span className="text-[9px] font-bold text-blue-800 uppercase tracking-widest">Tax Services</span>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-8 pr-6">
              Empowering businesses through specialized financial intelligence and comprehensive tax strategies. Your partner in long-term growth with Fexi Us.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-bold text-gray-900 uppercase tracking-[0.25em] mb-10">Company</h4>
            <ul className="space-y-5">
              {['About Fexi Us', 'Case Studies', 'Executive Team', 'Common FAQ', 'Career Opportunities'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => onLinkClick(link)}
                    className="text-gray-500 hover:text-blue-800 transition-all text-[15px] font-medium hover:translate-x-1 inline-block text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-bold text-gray-900 uppercase tracking-[0.25em] mb-10">Services</h4>
            <ul className="space-y-5">
              {['Payroll Solutions', 'Personal Returns', 'Business Registration', 'Managed Bookkeeping', 'Corporate Strategy'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => onLinkClick(link)}
                    className="text-gray-500 hover:text-blue-800 transition-all text-[15px] font-medium hover:translate-x-1 inline-block text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-bold text-gray-900 uppercase tracking-[0.25em] mb-10">Connect</h4>
            <ul className="space-y-5">
              {['Market Blog', 'Industry Insights', 'Privacy Protocol', 'Client Terms', 'Direct Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => onLinkClick(link)}
                    className="text-gray-500 hover:text-blue-800 transition-all text-[15px] font-medium hover:translate-x-1 inline-block text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-gray-400 font-medium">
            © {new Date().getFullYear()} <span className="text-gray-900 font-bold">Fexi Us</span>. Developed with Professional Precision.
          </p>
          <div className="flex items-center space-x-10 text-[12px] font-bold uppercase tracking-widest text-gray-400">
             <button onClick={() => onLinkClick('Digital Privacy')} className="hover:text-blue-800 transition-colors">Digital Privacy</button>
             <button onClick={() => onLinkClick('Accessibility')} className="hover:text-blue-800 transition-colors">Accessibility</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
