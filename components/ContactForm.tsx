
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to compose mail to the specified address
    window.location.href = "mailto:support@fexi.us";
  };

  return (
    <div className="bg-white p-10 rounded-sm sticky top-32 reveal shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
      <h3 className="text-2xl font-bold serif-font text-gray-900 mb-8 tracking-tight border-b border-gray-100 pb-4">Contact Us</h3>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            placeholder="Name*" 
            className="w-full p-4 bg-white border border-gray-200 text-sm focus:border-green-400 outline-none transition-all placeholder-gray-400" 
            required
          />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email*" 
            className="w-full p-4 bg-white border border-gray-200 text-sm focus:border-green-400 outline-none transition-all placeholder-gray-400" 
            required
          />
        </div>
        <div>
          <input 
            type="tel" 
            placeholder="Number*" 
            className="w-full p-4 bg-white border border-gray-200 text-sm focus:border-green-400 outline-none transition-all placeholder-gray-400" 
            required
          />
        </div>
        <div className="space-y-1">
          <label className="text-[11px] text-gray-400 font-bold uppercase tracking-wider ml-1">Current Client</label>
          <div className="relative">
            <select className="w-full p-4 bg-white border border-gray-200 text-sm text-gray-500 focus:border-green-400 outline-none appearance-none cursor-pointer transition-all">
              <option>-- Select --</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <textarea 
            placeholder="Your Message" 
            rows={4}
            className="w-full p-4 bg-white border border-gray-200 text-sm focus:border-green-400 outline-none resize-none transition-all placeholder-gray-400"
          ></textarea>
        </div>
        
        <button type="submit" className="w-full bg-[#9de0ad] hover:bg-[#1a2e1f] hover:text-white text-gray-900 font-bold py-4 rounded-sm flex items-center justify-center text-sm uppercase tracking-widest transition-all duration-300 group shadow-md hover:shadow-lg">
          Submit Now
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};
