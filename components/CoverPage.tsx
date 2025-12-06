import React from 'react';
import { PageData } from '../types';

interface Props {
  data: PageData;
  author: string;
}

const CoverPage: React.FC<Props> = ({ data, author }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-crust text-paper shadow-inner relative overflow-hidden border-l-8 border-l-black/10">
      {/* Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leather.png')]"></div>
      
      <div className="z-10 w-full h-full border-4 border-paper/30 p-2 flex flex-col items-center justify-center relative">
         <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-paper/20 rounded-tl-xl"></div>
         <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-paper/20 rounded-tr-xl"></div>
         <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-paper/20 rounded-bl-xl"></div>
         <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-paper/20 rounded-br-xl"></div>

        <div className="text-center mb-8">
            <span className="font-serif text-xs tracking-[0.4em] uppercase opacity-70 mb-4 block">Ricettario Esclusivo</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-2 tracking-wide text-paper drop-shadow-lg leading-none">
            {data.title}
            </h1>
            <div className="h-1 w-24 bg-paper/50 mx-auto my-6 rounded-full"></div>
            <p className="font-hand text-4xl text-amber-100 rotate-[-2deg]">{data.subtitle}</p>
        </div>

        <div className="z-10 my-6 w-40 h-40 rounded-full overflow-hidden border-4 border-paper/50 shadow-2xl relative">
             <div className="absolute inset-0 bg-sepia mix-blend-multiply z-10 pointer-events-none"></div>
             <img 
                src={`https://image.pollinations.ai/prompt/close%20up%20bakers%20hands%20dusting%20flour%20on%20rustic%20bread%20dough%20dark%20moody%20cinematic%20lighting%20artisan%20bakery%20photography%20high%20contrast?width=500&height=500&nologo=true&seed=cover123&model=flux`} 
                alt="Cover decoration" 
                className="w-full h-full object-cover"
             />
        </div>

        <div className="mt-12 text-center">
            <p className="font-sans text-[10px] uppercase tracking-widest opacity-60 mb-1">Scritto da</p>
            <div className="font-serif text-xl tracking-wider font-bold border-b border-paper/30 pb-1 inline-block">
                {author}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;