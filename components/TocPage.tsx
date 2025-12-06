import React from 'react';
import { PageData } from '../types';

interface Props {
  data: PageData;
  onNavigate: (page: number) => void;
}

const TocPage: React.FC<Props> = ({ data, onNavigate }) => {
  return (
    <div className="h-full flex flex-col p-8 bg-paper text-ink relative">
      <div className="h-2 w-full absolute top-0 left-0 bg-repeat-x opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #8a5a44 2px, transparent 2.5px)', backgroundSize: '10px 10px' }}></div>

      <div className="text-center mb-8">
        <h2 className="font-serif text-4xl font-bold text-crust inline-block border-b-4 border-double border-crust/20 pb-2 px-8">
            {data.title}
        </h2>
      </div>
      
      <div className="overflow-y-auto flex-grow no-scrollbar px-2">
        <div className="space-y-4">
          {data.items?.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex items-end cursor-pointer hover:bg-warm-brown/5 p-1 rounded transition-colors"
              onClick={() => onNavigate(item.pageNum)}
            >
              <span className="font-serif text-lg md:text-xl text-ink group-hover:text-crust transition-colors">
                {item.title}
              </span>
              <div className="flex-grow border-b-2 border-dotted border-crust/20 mx-2 mb-1.5 relative"></div>
              <span className="font-bold font-serif text-xl text-crust mb-0.5">{item.pageNum}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
         <img src="https://www.transparenttextures.com/patterns/wheat.png" className="mx-auto h-8 opacity-20" alt="decoration" />
        <span className="font-hand text-xl text-crust/60 block mt-2">15 Ricette Garantite dal Forno</span>
      </div>
    </div>
  );
};

export default TocPage;