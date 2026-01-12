
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndustryGrid } from './components/IndustryGrid';
import { ContactForm } from './components/ContactForm';
import { StatsSection } from './components/StatsSection';
import { CTABanner } from './components/CTABanner';
import { SubscriptionSection } from './components/SubscriptionSection';
import { Footer } from './components/Footer';
import { IndustryDetail } from './components/IndustryDetail';
import { GenericPageDetail } from './components/GenericPageDetail';
import { ConsultationRedirect } from './components/ConsultationRedirect';
import { Industry } from './types';
import { getIndustryDeepDive, getPageContent } from './services/geminiService';
import { useScrollReveal } from './hooks/useScrollReveal';

const App: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [selectedPageTitle, setSelectedPageTitle] = useState<string | null>(null);
  const [deepDiveData, setDeepDiveData] = useState<any>(null);
  const [pageContentData, setPageContentData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<'home' | 'industry' | 'page' | 'consultation'>('home');
  const containerRef = useScrollReveal();

  const handleIndustryClick = async (industry: Industry) => {
    setSelectedIndustry(industry);
    setSelectedPageTitle(null);
    setView('industry');
    setLoading(true);
    setDeepDiveData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    try {
      const result = await getIndustryDeepDive(industry.name);
      setDeepDiveData(result);
    } catch (error) {
      console.error("Failed to fetch detailed info", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFooterLinkClick = async (title: string) => {
    setSelectedPageTitle(title);
    setSelectedIndustry(null);
    setView('page');
    setLoading(true);
    setPageContentData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const result = await getPageContent(title);
      setPageContentData(result);
    } catch (error) {
      console.error("Failed to fetch page content", error);
    } finally {
      setLoading(false);
    }
  };

  const handleConsultationClick = () => {
    setView('consultation');
    setSelectedIndustry(null);
    setSelectedPageTitle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('home');
    setSelectedIndustry(null);
    setSelectedPageTitle(null);
    setDeepDiveData(null);
    setPageContentData(null);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-white">
      <Navbar 
        onLinkClick={handleFooterLinkClick}
        onHomeClick={handleBack}
        onStartConsultation={handleConsultationClick}
      />
      
      {view === 'home' && <Hero />}
      
      <main className="w-full">
        <section className="max-w-[1320px] mx-auto py-24 px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              {view === 'home' && (
                <>
                  <div className="mb-14 relative pl-10 reveal-left">
                    <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-blue-900 rounded-full"></div>
                    <span className="text-[14px] font-bold text-blue-800 uppercase tracking-[0.25em] block mb-4">Strategic Specializations</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 serif-font leading-[1.15] tracking-tight">
                      Professional Tax Services for Every Dynamic Industry
                    </h2>
                  </div>
                  
                  <div className="space-y-8 mb-16">
                    <p className="text-gray-500 text-[18px] leading-relaxed reveal serif-font italic opacity-80">
                      Our tax preparation service is designed to simplify the complex and often overwhelming process of filing taxes, 
                      ensuring that both individuals and businesses can stay compliant while maximizing their tax savings.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed reveal text-[16px]">
                      In the rare event of an IRS audit, we offer full representation, acting on your behalf to handle any inquiries or 
                      issues. Our team is experienced in dealing with tax authorities, ensuring your rights are protected through our 
                      proprietary Representation Protocol.
                    </p>
                  </div>

                  <IndustryGrid onSelectIndustry={handleIndustryClick} />
                </>
              )}

              {view === 'industry' && (
                <IndustryDetail 
                  industry={selectedIndustry!} 
                  data={deepDiveData} 
                  onBack={handleBack} 
                  loading={loading}
                />
              )}

              {view === 'page' && (
                <GenericPageDetail 
                  pageTitle={selectedPageTitle!}
                  data={pageContentData}
                  onBack={handleBack}
                  loading={loading}
                />
              )}

              {view === 'consultation' && (
                <ConsultationRedirect onBack={handleBack} />
              )}
            </div>

            <aside className="w-full lg:w-[420px]">
              <ContactForm />
            </aside>
          </div>
        </section>

        {view === 'home' && (
          <>
            <div className="reveal">
              <CTABanner onStartConsultation={handleConsultationClick} />
            </div>
            <StatsSection />
          </>
        )}
        
        <div className="reveal">
          <SubscriptionSection />
        </div>
      </main>

      <Footer onLinkClick={handleFooterLinkClick} />
    </div>
  );
};

export default App;