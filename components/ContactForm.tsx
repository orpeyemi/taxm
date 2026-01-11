
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const ContactForm: React.FC = () => {
  return (
    <div className="bg-[#f8f9f8] p-12 rounded-sm sticky top-32 reveal shadow-sm border border-gray-100">
      <h3 className="text-3xl font-bold serif-font text-gray-900 mb-10 tracking-tight">Connect With Us</h3>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Your Full Name*" 
            className="w-full p-5 bg-white border border-transparent border-b-gray-200 text-sm focus:border-b-green-500 focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 shadow-sm" 
            required
          />
        </div>
        <div className="relative">
          <input 
            type="email" 
            placeholder="Email Address*" 
            className="w-full p-5 bg-white border border-transparent border-b-gray-200 text-sm focus:border-b-green-500 focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 shadow-sm" 
            required
          />
        </div>
        <div className="relative">
          <input 
            type="tel" 
            placeholder="Phone Number*" 
            className="w-full p-5 bg-white border border-transparent border-b-gray-200 text-sm focus:border-b-green-500 focus:ring-0 outline-none transition-all duration-300 placeholder-gray-400 shadow-sm" 
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] ml-1">Account Status</label>
          <div className="relative group">
            <select className="w-full p-5 bg-white border-b-gray-200 border-transparent border text-sm text-gray-500 focus:border-b-green-500 outline-none appearance-none cursor-pointer transition-all shadow-sm">
              <option>-- Select Status --</option>
              <option>Current Fint Client</option>
              <option>Prospective Business</option>
              <option>General Inquiry</option>
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-green-500 transition-colors" />
          </div>
        </div>
        <div>
          <textarea 
            placeholder="Briefly describe your requirements..." 
            rows={5}
            className="w-full p-5 bg-white border border-transparent border-b-gray-200 text-sm focus:border-b-green-500 outline-none resize-none transition-all duration-300 placeholder-gray-400 shadow-sm"
          ></textarea>
        </div>
        
        <button className="w-full bg-[#9de0ad] hover:bg-[#1a2e1f] hover:text-white text-gray-900 font-bold py-6 rounded-sm flex items-center justify-center text-[13px] uppercase tracking-[0.2em] transition-all duration-500 group relative overflow-hidden shadow-lg shadow-green-100">
          <span className="relative z-10 flex items-center">
            Submit Application
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-3 transition-transform duration-500" />
          </span>
          <div className="absolute inset-0 bg-green-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </form>
    </div>
  );
};
