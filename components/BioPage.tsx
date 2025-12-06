import React, { useEffect } from 'react';
import { ArrowLeft, GraduationCap, Factory, Heart, Microscope, Wheat } from 'lucide-react';

interface Props {
  onBack: () => void;
  logoUrl?: string;
}

const BioPage: React.FC<Props> = ({ onBack, logoUrl }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#121212] min-h-screen animate-slide-in pb-20 text-gray-200 font-sans relative">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Hero Header */}
      <div className="relative h-[45vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#121212] z-10"></div>
        <img 
            src="https://image.pollinations.ai/prompt/portrait%20of%20a%20baker%20kneading%20dough%20warm%20atmosphere%20flour%20dust%20dark%20background%20cinematic%20lighting?width=1200&height=800&nologo=true&model=flux" 
            className="w-full h-full object-cover opacity-60"
            alt="Chef Work"
        />
        
        <div className="absolute top-6 left-6 z-50">
            <button 
                onClick={onBack}
                className="group flex items-center gap-2 text-white hover:text-amber-400 transition-all duration-300 backdrop-blur-md bg-black/30 px-5 py-2.5 rounded-full border border-white/10 hover:border-amber-500/50"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium text-base tracking-wide">Indietro</span>
            </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20 px-6 pb-12 flex flex-col items-center text-center">
            <h1 className="font-hand text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 mb-2 drop-shadow-lg transform -rotate-2">
                Tony Martins
            </h1>
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-4"></div>
            <div className="flex items-center gap-3 text-amber-500/90 font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                <GraduationCap size={16} />
                <span>Tecnico Alimentare AFC</span>
            </div>
        </div>
      </div>

      {/* Narrative Container */}
      <div className="max-w-2xl mx-auto px-6 relative z-10 mt-12 space-y-16">
        
        {/* Introduction Quote */}
        <div className="text-center">
            <p className="font-serif text-2xl md:text-3xl text-gray-300 leading-relaxed italic opacity-90">
                "Ho portato il rigore dell'industria alimentare nella cucina di casa. Non per lavoro, ma per amore."
            </p>
        </div>

        {/* Chapter 1: The Background */}
        <div className="relative pl-8 md:pl-0 border-l-2 border-amber-500/20 md:border-l-0">
             <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-[#1a1a1a] rounded-full border border-white/10 items-center justify-center text-amber-500 shadow-lg">
                    <Factory size={28} />
                 </div>
                 <div className="space-y-4">
                     <h2 className="text-xl font-bold text-gray-100 uppercase tracking-widest flex items-center gap-3">
                        <span className="md:hidden text-amber-500"><Factory size={20}/></span>
                        Dall'Industria...
                     </h2>
                     <p className="text-gray-400 leading-relaxed text-lg font-light">
                        Per oltre 20 anni ho lavorato dietro le quinte del mondo alimentare. Ho spaziato dall'alta ristorazione alla produzione industriale di carne, attraversando il magico mondo del cioccolato e della panificazione su larga scala. <br/><br/>
                        La mia specializzazione in <strong>Convenience Food</strong> mi ha insegnato una cosa fondamentale: la qualità deve essere replicabile. Ho imparato a gestire processi complessi, ad amare la chimica degli ingredienti e ad applicare il <strong>Lean Management</strong> per ottenere il miglior risultato con il metodo più efficiente.
                     </p>
                 </div>
             </div>
        </div>

        {/* Chapter 2: The Turning Point */}
        <div className="relative pl-8 md:pl-0 border-l-2 border-amber-500/20 md:border-l-0">
             <div className="flex flex-col md:flex-row gap-8 items-start">
                 <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-[#1a1a1a] rounded-full border border-white/10 items-center justify-center text-amber-500 shadow-lg">
                    <Heart size={28} />
                 </div>
                 <div className="space-y-4">
                     <h2 className="text-xl font-bold text-gray-100 uppercase tracking-widest flex items-center gap-3">
                        <span className="md:hidden text-amber-500"><Heart size={20}/></span>
                        ...A Casa Nostra
                     </h2>
                     <p className="text-gray-400 leading-relaxed text-lg font-light">
                        Poi, la vita ci ha messo di fronte a una sfida. Sia mia moglie che mia figlia sono risultate <strong>celiache</strong>. In quel momento, la farina convenzionale ha smesso di varcare la soglia di casa nostra. <br/><br/>
                        Non potevo accettare che "senza glutine" significasse "senza gusto". Ho deciso di trasformare la mia cucina in un piccolo laboratorio di <strong>R&S (Ricerca e Sviluppo)</strong>. Quello che era il mio lavoro è diventato la mia missione quotidiana: garantire alla mia famiglia il piacere di un pane vero, sicuro e buono.
                     </p>
                 </div>
             </div>
        </div>

        {/* Chapter 3: The Philosophy */}
        <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <Microscope size={200} />
            </div>
            
            <div className="relative z-10 text-center">
                 <div className="inline-flex p-3 rounded-full bg-amber-500/10 text-amber-500 mb-6">
                    <Wheat size={24} />
                 </div>
                 <h3 className="font-serif text-2xl text-white mb-4 italic">"Il forno di casa come una panetteria"</h3>
                 <p className="text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                    Oggi applico la mia sensibilità per la qualità e la gestione snella (Lean) ad ogni singola pagnotta. Ogni ricetta che trovate qui è una <strong>prova costatata</strong>: testata, fallita, corretta e perfezionata. 
                    <br/><br/>
                    Non sono solo un tecnico, sono un papà che non scende a compromessi sulla qualità.
                 </p>
            </div>
        </div>

        {/* Footer Signature */}
        <div className="pt-16 pb-8 flex flex-col items-center justify-center text-center opacity-70">
            <img src={logoUrl || ""} alt="Logo" className="w-12 h-12 opacity-30 mb-6 grayscale" />
        </div>

      </div>
    </div>
  );
};

export default BioPage;