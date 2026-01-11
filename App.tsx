
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustryGrid } from './components/IndustryGrid';
import { ContactForm } from './components/ContactForm';
import { StatsSection } from './components/StatsSection';
import { CTABanner } from './components/CTABanner';
import { SubscriptionSection } from './components/SubscriptionSection';
import { Footer } from './components/Footer';
import { Industry, TaxAdvice } from './types';
import { getIndustryTaxAdvice } from './services/geminiService';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Loader2, X, Sparkles, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [advice, setAdvice] = useState<TaxAdvice | null>(null);
  const [loadingAdvice, setLoadingAdvice] = useState(false);
  const containerRef = useScrollReveal();

  const handleIndustryClick = async (industry: Industry) => {
    setSelectedIndustry(industry);
    setLoadingAdvice(true);
    setAdvice(null);
    try {
      const result = await getIndustryTaxAdvice(industry.name);
      setAdvice(result);
    } catch (error) {
      console.error("Failed to fetch advice", error);
    } finally {
      setLoadingAdvice(false);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      
      <main className="w-full">
        {/* Industry Grid Section */}
        <section className="max-w-[1400px] mx-auto py-32 px-6">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="flex-1">
              <div className="mb-16 border-l-[6px] border-green-400 pl-10 reveal-left">
                <span className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.4em] block mb-4">Strategic Industries</span>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 serif-font leading-[1.05] max-w-2xl tracking-tight">
                  Professional Tax Systems for Progressive Organizations
                </h2>
              </div>
              
              <div className="space-y-8 mb-16 max-w-3xl">
                <p className="text-gray-500 text-xl leading-relaxed reveal">
                  Our tax optimization frameworks are engineered to navigate the modern regulatory landscape, 
                  ensuring your organization maintains peak compliance while accelerating fiscal efficiency.
                </p>
                
                <p className="text-gray-400 leading-relaxed reveal text-[16px]">
                  Through proactive auditing and strategic representation, Fint secures your financial standing 
                  against shifting IRS protocols. We prioritize absolute data integrity and institutional 
                  confidentiality at every touchpoint of your tax journey.
                </p>
              </div>

              <IndustryGrid onSelectIndustry={handleIndustryClick} />
            </div>

            <aside className="w-full lg:w-[450px]">
              <ContactForm />
            </aside>
          </div>
        </section>

        {/* Dynamic Sections with Enhanced Reveals */}
        <div className="reveal">
          <CTABanner />
        </div>
        
        <StatsSection />
        
        <div className="reveal">
          <SubscriptionSection />
        </div>
      </main>

      <Footer />

      {/* AI Advice Modal with Smooth Transitions */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#1a2e1f]/80 backdrop-blur-xl animate-in fade-in duration-700">
          <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden animate-in zoom-in-95 duration-500 border border-white/20">
            <div className="bg-gradient-to-r from-[#1a2e1f] to-[#2d4d35] p-10 flex justify-between items-center text-white relative overflow-hidden">
              <div className="relative z-10 flex items-center space-x-5">
                <div className="bg-green-500/30 p-4 rounded-2xl backdrop-blur-md">
                  <Sparkles className="w-8 h-8 text-green-300" />
                </div>
                <div>
                  <h5 className="text-[11px] font-bold text-green-400 uppercase tracking-[0.3em] mb-1">Intelligence Report</h5>
                  <h3 className="text-4xl font-bold serif-font tracking-tight">{selectedIndustry.name} Strategy</h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedIndustry(null)}
                className="relative z-10 hover:bg-white/10 p-3 rounded-full transition-all duration-300 hover:rotate-90"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            </div>
            
            <div className="p-12">
              {loadingAdvice ? (
                <div className="flex flex-col items-center justify-center py-24">
                  <div className="relative">
                    <Loader2 className="w-20 h-20 text-green-500 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Sparkles className="w-8 h-8 text-green-400 animate-pulse" />
                    </div>
                  </div>
                  <p className="mt-10 text-gray-400 font-bold uppercase tracking-[0.2em] text-sm animate-pulse">Aggregating Fiscal Insights...</p>
                </div>
              ) : advice ? (
                <div className="space-y-12">
                  <div className="bg-[#f8f9f8] border-l-[6px] border-green-500 p-8 rounded-r-[2rem] shadow-sm">
                    <p className="text-gray-900 font-medium text-2xl leading-relaxed italic serif-font">
                      "{advice.advice}"
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    <h4 className="font-bold text-gray-900 flex items-center text-xl tracking-tight">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-5">
                         <ArrowRight className="w-5 h-5 text-green-700" />
                      </div>
                      Tactical Recommendations
                    </h4>
                    <ul className="grid grid-cols-1 gap-6">
                      {advice.keyPoints.map((point, idx) => (
                        <li key={idx} className="group flex items-start space-x-6 bg-gray-50/50 p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-white hover:shadow-xl transition-all duration-500">
                          <span className="bg-white shadow-md text-green-600 w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 font-bold border border-gray-100 group-hover:bg-green-500 group-hover:text-white transition-all">
                            {idx + 1}
                          </span>
                          <p className="text-gray-600 text-[16px] leading-relaxed group-hover:text-gray-900 pt-1">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <span className="text-[11px] text-gray-300 font-bold tracking-[0.4em] uppercase">Proprietary Fiscal Protocol</span>
                    <button 
                      onClick={() => setSelectedIndustry(null)}
                      className="w-full sm:w-auto bg-[#1a2e1f] text-white px-12 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-green-600 hover:scale-105 transition-all duration-500 shadow-2xl shadow-gray-200"
                    >
                      Dismiss Report
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-red-500 font-bold tracking-widest uppercase text-sm">Synchronous Error: Protocol Failure</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
