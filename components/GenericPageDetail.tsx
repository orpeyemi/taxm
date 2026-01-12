
import React from 'react';
import { ArrowLeft, Loader2, Sparkles } from 'lucide-react';

interface GenericPageDetailProps {
  data: any;
  onBack: () => void;
  loading: boolean;
  pageTitle: string;
}

export const GenericPageDetail: React.FC<GenericPageDetailProps> = ({ data, onBack, loading, pageTitle }) => {
  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-6">
        <Loader2 className="w-16 h-16 text-blue-900 animate-spin mb-6" />
        <h2 className="text-3xl font-bold serif-font text-gray-900 animate-pulse">
          Preparing "{pageTitle}"...
        </h2>
        <p className="text-gray-500 mt-2 italic">Curating expert insights for Fexi Us clients</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-blue-900 transition-colors font-bold uppercase tracking-widest text-xs mb-12 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Return
      </button>

      <div className="mb-16">
        <div className="flex items-center space-x-2 text-blue-800 mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{data.subtitle}</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold serif-font text-gray-900 tracking-tight mb-8">
          {data.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed serif-font">
          {data.introduction}
        </p>
      </div>

      <div className="space-y-12 mb-20">
        {data.sections.map((section: any, i: number) => (
          <section key={i} className="border-t border-gray-100 pt-8">
            <h3 className="text-2xl font-bold serif-font text-gray-900 mb-4">{section.heading}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="bg-blue-900 text-white p-12 rounded-sm text-center">
        <h4 className="text-2xl font-bold serif-font mb-4">Ready to take the next step?</h4>
        <p className="text-blue-200 mb-8">{data.callToAction}</p>
        <button 
          onClick={() => window.location.href = 'mailto:support@fexi.us'}
          className="bg-white text-blue-900 px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};
