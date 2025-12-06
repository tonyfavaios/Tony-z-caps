import React, { useEffect, useRef, useState } from 'react';
import { PageData } from '../types';
import { ArrowLeft, Printer, ChefHat, Clock, Flame, Wheat, Leaf } from 'lucide-react';

interface Props {
  data: PageData;
  onBack: () => void;
  authorName: string;
  autoPrint?: boolean;
  logoUrl?: string;
  heroImage?: string;
  onAuthorClick?: () => void;
}

const RecipePage: React.FC<Props> = ({ data, onBack, authorName, autoPrint, logoUrl, heroImage, onAuthorClick }) => {
  const content = data.content;
  const topRef = useRef<HTMLDivElement>(null);

  // Default image if none provided
  const finalImage = heroImage || "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&auto=format&fit=crop&q=80";

  useEffect(() => {
    // Scroll to top on mount
    topRef.current?.scrollIntoView({ behavior: 'smooth' });

    if (autoPrint) {
        const timer = setTimeout(() => {
            window.print();
        }, 500);
        return () => clearTimeout(timer);
    }
  }, [autoPrint]);

  if (!content) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div ref={topRef} className="bg-[#121212] min-h-screen animate-slide-in pb-20 text-gray-200 font-sans relative">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Hero Image Section */}
      <div className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#121212] z-10"></div>
          <img 
            src={finalImage} 
            alt={content.title}
            className="w-full h-full object-cover opacity-90 transform scale-105"
          />
          
          {/* Floating Nav inside Hero */}
          <div className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
             <button 
                onClick={onBack}
                className="group flex items-center gap-2 text-white hover:text-amber-400 transition-all duration-300 backdrop-blur-md bg-black/30 px-5 py-2.5 rounded-full border border-white/10 hover:border-amber-500/50 hover:bg-black/50"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium text-base tracking-wide">Torna al Forno</span>
            </button>
            
            <button 
                onClick={handlePrint} 
                title="Stampa Ricetta" 
                className="p-3 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white hover:text-amber-400 hover:bg-black/50 transition-colors"
            >
                <Printer size={20} />
            </button>
          </div>

          {/* Title Block in Hero */}
          <div className="absolute bottom-0 left-0 w-full z-20 px-6 pb-12 max-w-7xl mx-auto flex flex-col items-start">
             <div className="flex items-center gap-3 mb-6">
                 <span className="px-4 py-1.5 bg-amber-600/90 text-white text-xs font-bold uppercase tracking-[0.15em] shadow-lg rounded-sm">
                    {content.category}
                 </span>
                 <span className="flex items-center gap-1.5 px-4 py-1.5 bg-white/10 border border-white/20 text-gray-100 text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-md rounded-sm">
                    <Wheat size={14} /> 100% Gluten Free
                 </span>
             </div>
             <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 leading-none drop-shadow-2xl">
                {content.title}
             </h1>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-10 md:-mt-16">
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* LEFT COLUMN: Ingredients & Meta */}
            <div className="lg:w-4/12 relative z-20">
                <div className="sticky top-24 space-y-8">
                    
                    {/* Meta Stats Card */}
                    <div className="bg-[#181818]/95 border border-white/10 p-8 rounded-2xl shadow-2xl flex justify-between items-center backdrop-blur-xl">
                         <div className="text-center flex-1">
                            <Clock size={24} className="mx-auto text-amber-500 mb-3" />
                            <div className="text-[11px] uppercase text-gray-400 tracking-widest font-semibold mb-1">Prep</div>
                            <div className="font-serif text-2xl text-white font-medium">{content.prepTime.replace(' min', '\'')}</div>
                         </div>
                         <div className="h-10 w-px bg-white/10"></div>
                         <div className="text-center flex-1">
                            <Wheat size={24} className="mx-auto text-amber-500 mb-3" />
                            <div className="text-[11px] uppercase text-gray-400 tracking-widest font-semibold mb-1">Lievito</div>
                            <div className="font-serif text-2xl text-white font-medium">{content.riseTime.replace(' ora', 'h').replace(' ore', 'h')}</div>
                         </div>
                         <div className="h-10 w-px bg-white/10"></div>
                         <div className="text-center flex-1">
                            <Flame size={24} className="mx-auto text-amber-500 mb-3" />
                            <div className="text-[11px] uppercase text-gray-400 tracking-widest font-semibold mb-1">Cottura</div>
                            <div className="font-serif text-2xl text-white font-medium">{content.cookTime.replace(' min', '\'')}</div>
                         </div>
                    </div>

                    {/* Ingredients Card */}
                    <div className="bg-[#1e1e1e] border border-white/5 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/5">
                        <div className="bg-[#252525] p-6 border-b border-white/5 flex items-center justify-between">
                            <h3 className="font-serif text-2xl font-bold text-amber-500 italic">Ingredienti</h3>
                            <span className="text-xs font-sans text-gray-500 bg-black/20 px-2 py-1 rounded border border-white/5">
                                Per {content.category === 'Pane' ? '1 Porzione' : 'circa 20 pz'}
                            </span>
                        </div>
                        <div className="p-8">
                            <ul className="space-y-6">
                                {content.ingredients.map((ing, i) => (
                                    <li key={i} className="flex justify-between items-baseline text-base group pb-4 border-b border-white/5 last:border-0 last:pb-0 border-dashed">
                                        <div className="flex items-start gap-4 pr-4">
                                            <Leaf size={16} className="text-amber-600 mt-1 flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                            <span className="text-gray-200 font-medium tracking-wide leading-snug group-hover:text-white transition-colors">
                                                {ing.item}
                                            </span>
                                        </div>
                                        <span className="text-amber-400 font-bold whitespace-nowrap text-lg">{ing.amount}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Chef's Tip - Optimized */}
                        <div className="bg-[#161616] p-7 border-t border-white/5 relative overflow-hidden group">
                             {/* Decorative accent */}
                             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-amber-700 opacity-80"></div>
                             
                             <div className="flex gap-5 items-start relative z-10">
                                <ChefHat className="text-amber-500 flex-shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]" size={26} />
                                <div>
                                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 text-xs font-bold uppercase tracking-[0.25em] mb-3">
                                        L'Esperto Consiglia
                                    </h4>
                                    <p className="text-gray-300 text-lg leading-relaxed italic font-serif opacity-90">
                                        "{content.tips}"
                                    </p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Instructions */}
            <div className="lg:w-8/12 pb-24 lg:pt-8">
                {/* Description / Intro */}
                <div className="mb-14 relative">
                    <span className="absolute -left-4 -top-4 text-6xl text-amber-600/20 font-serif">“</span>
                    <p className="font-serif text-2xl md:text-3xl text-gray-300 font-light leading-relaxed italic pl-6 md:pl-0">
                        {content.description}
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-16">
                    {content.instructions.map((step, i) => (
                        <div key={i} className="relative pl-0 md:pl-8 group">
                            {/* Vertical Line */}
                            <div className="hidden md:block absolute left-0 top-4 bottom-[-4rem] w-px bg-white/10 group-last:hidden"></div>
                            
                            {/* Step Number Badge */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="md:absolute md:-left-5 md:top-0 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-700 rounded-full flex items-center justify-center shadow-lg shadow-amber-900/40 ring-4 ring-[#121212] z-10">
                                    <span className="font-serif text-xl font-bold text-white">{i + 1}</span>
                                </div>
                                <h5 className="font-serif text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 font-bold tracking-wide md:hidden">Passaggio {i + 1}</h5>
                            </div>
                            
                            {/* Step Content */}
                            <div className="relative bg-[#1a1a1a] p-6 md:p-8 rounded-xl border border-white/5 hover:border-white/10 transition-colors shadow-sm">
                                <p className="text-gray-100 text-lg md:text-[1.15rem] leading-loose font-sans font-normal antialiased">
                                    {step}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Author Footer */}
                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col items-center justify-center text-center opacity-70">
                    <img src={logoUrl || ""} alt="Logo" className="w-16 h-16 opacity-40 mb-6 grayscale" />
                    <p className="font-serif italic text-gray-400 text-lg">Homemade Bread</p>
                    
                    {/* Metallic Signature Footer - CLICKABLE */}
                    <div 
                        onClick={onAuthorClick}
                        className="mt-4 flex flex-col items-center cursor-pointer group transition-transform duration-300 hover:scale-105"
                        title="Leggi la storia di Tony"
                    >
                        <div className="font-hand text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 -rotate-2 group-hover:from-white group-hover:via-gray-200 group-hover:to-gray-400 transition-all">
                            Tony Martins
                        </div>
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent my-2 group-hover:w-32 transition-all duration-500"></div>
                        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">
                            Tec. Alimentare AFC
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;