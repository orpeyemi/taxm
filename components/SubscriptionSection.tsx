
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const SubscriptionSection: React.FC = () => {
  return (
    <section className="bg-[#fdfaf9] py-32 border-t border-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left: Premium Contact Card */}
        <div className="bg-blue-950 text-white p-16 rounded-[2rem] relative overflow-hidden shadow-2xl shadow-gray-200">
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-2 shadow-lg">
                <img src="https://i.postimg.cc/7hc0BgNM/White-and-Blue-Modern-Financial-Services-Logo-Design-(6).png" alt="Fexi Us Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold serif-font tracking-tight">Fexi Us</span>
                <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">Tax Services</span>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Primary Office</h5>
                  <p className="text-xl text-gray-200 leading-snug max-w-[280px] serif-font">
                    9503 Amsdell Ave, Whittier, CA 90605
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Digital Portal</h5>
                  <a href="mailto:support@fexi.us" className="text-2xl text-gray-200 hover:text-white transition-colors serif-font border-b border-white/20 pb-1">support@fexi.us</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative curve */}
          <div className="absolute bottom-[-10%] right-[-10%] opacity-[0.03] pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 200 200">
               <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" fill="none" />
               <circle cx="100" cy="100" r="100" stroke="white" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>

        {/* Right: Modern Subscription Form */}
        <div className="lg:pl-8">
          <h3 className="text-5xl font-bold serif-font text-gray-900 mb-8 leading-tight tracking-tight">Receive Strategic Financial Intelligence.</h3>
          <p className="text-gray-500 text-lg mb-12 leading-relaxed">Join 2,000+ businesses receiving our weekly audit of tax laws and market shifts from Fexi Us experts.</p>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-5 bg-white border border-gray-100 rounded-sm outline-none focus:border-blue-400 transition-all shadow-sm placeholder:text-gray-300"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-5 bg-white border border-gray-100 rounded-sm outline-none focus:border-blue-400 transition-all shadow-sm placeholder:text-gray-300"
              />
            </div>
            <button className="w-full bg-blue-900 hover:bg-gray-900 text-white font-bold py-6 uppercase text-[12px] tracking-[0.3em] transition-all duration-500 rounded-sm shadow-xl shadow-blue-100 hover:shadow-gray-200">
              Subscribe to Insights
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
};
