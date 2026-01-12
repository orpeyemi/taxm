
import React from 'react';
import { ArrowLeft, CheckCircle2, AlertCircle, TrendingUp, Lightbulb, Loader2 } from 'lucide-react';

interface IndustryDetailProps {
  industry: { name: string };
  data: any;
  onBack: () => void;
  loading: boolean;
}

export const IndustryDetail: React.FC<IndustryDetailProps> = ({ industry, data, onBack, loading }) => {
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-6">
        <Loader2 className="w-16 h-16 text-blue-900 animate-spin mb-6" />
        <h2 className="text-3xl font-bold serif-font text-gray-900 animate-pulse">
          Generating {industry.name} Analysis...
        </h2>
        <p className="text-gray-500 mt-2 italic">Scanning latest IRS regulations and market data</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-blue-900 transition-colors font-bold uppercase tracking-widest text-xs mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Industries
      </button>

      <div className="mb-16">
        <div className="inline-block px-4 py-1 bg-blue-50 text-blue-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 rounded-full border border-blue-100">
          Industry Profile
        </div>
        <h1 className="text-6xl md:text-7xl font-bold serif-font text-gray-900 tracking-tight mb-8">
          {data.industryName}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl serif-font italic border-l-4 border-blue-900 pl-8">
          {data.overview}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <section className="bg-white p-10 border border-gray-100 shadow-sm rounded-sm">
            <h3 className="flex items-center text-xl font-bold serif-font text-gray-900 mb-6">
              <AlertCircle className="w-6 h-6 mr-3 text-red-500" />
              Core Challenges
            </h3>
            <ul className="space-y-4">
              {data.challenges.map((c: string, i: number) => (
                <li key={i} className="flex items-start text-gray-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-gray-900 text-white p-10 rounded-sm">
            <h3 className="flex items-center text-xl font-bold serif-font mb-6">
              <CheckCircle2 className="w-6 h-6 mr-3 text-blue-400" />
              Compliance Essentials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.complianceChecklist.map((item: string, i: number) => (
                <div key={i} className="flex items-center p-3 bg-white/5 border border-white/10 rounded-sm">
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-[#f2f8f4] p-10 border border-blue-50 rounded-sm">
            <h3 className="flex items-center text-xl font-bold serif-font text-gray-900 mb-8">
              <Lightbulb className="w-6 h-6 mr-3 text-blue-800" />
              Strategic Opportunities
            </h3>
            <div className="space-y-6">
              {data.strategicOpportunities.map((opt: any, i: number) => (
                <div key={i} className="group">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-blue-800 mr-2">0{i+1}.</span>
                    {opt.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed pl-8 group-hover:text-gray-900 transition-colors">
                    {opt.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-50/50 p-10 rounded-sm border border-blue-100">
            <h3 className="flex items-center text-xl font-bold serif-font text-gray-900 mb-4">
              <TrendingUp className="w-6 h-6 mr-3 text-blue-900" />
              Future Outlook
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {data.futureOutlook}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
