
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export const SubscriptionSection: React.FC = () => {
  return (
    <section className="bg-[#fdfaf9] py-32 border-t border-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left: Premium Contact Card */}
        <div className="bg-[#1a2e1f] text-white p-16 rounded-[2rem] relative overflow-hidden shadow-2xl shadow-gray-200">
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-14 h-14 bg-red-400 rounded-full flex items-center justify-center text-white font-bold text-2xl italic shadow-lg shadow-red-900/20">F</div>
              <span className="text-4xl font-bold serif-font tracking-tight">Fint</span>
            </div>
            
            <div className="space-y-10 mb-16">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Primary Office</h5>
                  <p className="text-xl text-gray-200 leading-snug max-w-[280px] serif-font">
                    2905 Denington Dr, Alaska, United States
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Digital Portal</h5>
                  <a href="mailto:hello@fint.com" className="text-2xl text-gray-200 hover:text-white transition-colors serif-font border-b border-white/20 pb-1">hello@fint.com</a>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-5">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-green-500 transition-all duration-500 hover:-translate-y-2">
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
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
          <p className="text-gray-500 text-lg mb-12 leading-relaxed">Join 2,000+ businesses receiving our weekly audit of tax laws and market shifts.</p>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full p-5 bg-white border border-gray-100 rounded-sm outline-none focus:border-green-400 transition-all shadow-sm placeholder:text-gray-300"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-5 bg-white border border-gray-100 rounded-sm outline-none focus:border-green-400 transition-all shadow-sm placeholder:text-gray-300"
              />
            </div>
            <button className="w-full bg-[#96e0a8] hover:bg-[#1a2e1f] hover:text-white text-gray-900 font-bold py-6 uppercase text-[12px] tracking-[0.3em] transition-all duration-500 rounded-sm shadow-xl shadow-green-100 hover:shadow-gray-200">
              Subscribe to Insights
            </button>
          </form>
          
          <div className="mt-14 p-8 bg-white border border-gray-50 rounded-2xl shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Select Preference</p>
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {['Small Business Tips', 'Technical Tax Law', 'Venture Capital Tips'].map((topic, i) => (
                <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="radio" name="topic" className="peer sr-only" defaultChecked={i === 0} />
                    <div className="w-5 h-5 rounded-full border-2 border-gray-200 peer-checked:border-green-500 transition-all"></div>
                    <div className="absolute inset-1 rounded-full bg-green-500 scale-0 peer-checked:scale-100 transition-transform duration-300"></div>
                  </div>
                  <span className="text-[13px] font-semibold text-gray-500 group-hover:text-gray-900 transition-colors">{topic}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
