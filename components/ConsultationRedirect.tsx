
import React from 'react';
import { ArrowLeft, Monitor, ShieldCheck, FileText, Share2, Mail, ExternalLink } from 'lucide-react';

interface ConsultationRedirectProps {
  onBack: () => void;
}

export const ConsultationRedirect: React.FC<ConsultationRedirectProps> = ({ onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-5xl mx-auto py-12 px-6">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-blue-900 transition-colors font-bold uppercase tracking-widest text-xs mb-16 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-blue-50 text-blue-900 rounded-full mb-8 border border-blue-100">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Secure Workstation Protocol</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold serif-font text-gray-900 leading-[1.1] mb-8 tracking-tight">
            Premium Virtual Consult Environment
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed serif-font italic mb-10">
            "To ensure the highest level of security and provide a seamless experience for real-time financial auditing, our secure consultation portal is optimized exclusively for desktop workstations."
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Multi-Pane Document Review</h4>
                <p className="text-sm text-gray-500">View ledgers and tax forms side-by-side with your dedicated consultant.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                <Share2 className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Encrypted Desktop Sharing</h4>
                <p className="text-sm text-gray-500">Proprietary screen-sharing technology designed for sensitive financial data.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => window.location.href = 'mailto:support@fexi.us?subject=Consultation Link Request'}
              className="bg-blue-900 text-white px-8 py-4 rounded-sm font-bold flex items-center justify-center text-[12px] uppercase tracking-[0.2em] hover:bg-gray-900 transition-all group"
            >
              <Mail className="w-4 h-4 mr-3" />
              Get Started
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl shadow-blue-100 overflow-hidden">
            <div className="bg-gray-900 rounded-xl p-10 flex flex-col items-center text-center space-y-8 py-20">
              <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                <Monitor className="w-12 h-12 text-blue-400 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="text-white text-2xl font-bold serif-font">Desktop Access Required</h3>
                <p className="text-blue-200/60 text-sm max-w-[240px]">Please log in from your MacOS or Windows workstation to proceed.</p>
              </div>
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-1/3"></div>
              </div>
              <p className="text-[10px] text-blue-300/40 uppercase tracking-[0.3em]">Protocol 82.X-Secure</p>
            </div>
          </div>
          
          {/* Decorative Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
      
      <div className="mt-24 pt-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-xs font-medium uppercase tracking-[0.2em]">
          Technical Support: +14073370900 (Option 4)
        </p>
      </div>
    </div>
  );
};
