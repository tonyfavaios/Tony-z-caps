import React, { useState } from 'react';
import { BookData, PageType, PageData } from '../types';
import RecipePage from './RecipePage';
import BioPage from './BioPage';
import { Printer, RefreshCw, ChefHat, Search, ArrowRight, UtensilsCrossed, Wheat, Clock, Flame, Star, BookOpen, Share2, Facebook, Twitter, Link as LinkIcon, MessageCircle, ShieldCheck, Award } from 'lucide-react';
import { generateBookContent } from '../services/geminiService';

interface Props {
  initialBook: BookData;
}

const AppLayout: React.FC<Props> = ({ initialBook }) => {
  const [book, setBook] = useState<BookData>(initialBook);
  const [selectedPageId, setSelectedPageId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Store image for transition
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [autoPrint, setAutoPrint] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const recipes = book.pages.filter(p => p.type === PageType.RECIPE && p.content);
  
  // Premium Bakery Logo - Optimized Prompt for cleaner vector look
  const logoUrl = "https://image.pollinations.ai/prompt/minimalist%20stylized%20wheat%20ear%20logo%20icon,%20geometric%20vector%20line%20art,%20gold%20gradient%20on%20black%20background,%20elegant,%20centered,%20modern%20bakery%20brand?width=400&height=400&nologo=true&model=flux";

  const handleRecipeClick = (id: number, imageUrl: string) => {
    setAutoPrint(false);
    setSelectedImage(imageUrl);
    setSelectedPageId(id);
    // window.scrollTo(0, 0); // RecipePage handles scrolling now
  };

  const handleBack = () => {
    setSelectedPageId(null);
    setSelectedImage(null);
    setAutoPrint(false);
  };

  const handleAuthorClick = () => {
      setShowBio(true);
      window.scrollTo(0, 0);
  };

  const handleBackFromBio = () => {
      setShowBio(false);
  };

  const handleGenerateNew = async () => {
    if (!process.env.API_KEY) {
        alert("API Key mancante.");
        return;
    }
    const confirmGen = window.confirm("Vuoi generare un nuovo ricettario? Questo sostituirà quello attuale.");
    if (!confirmGen) return;

    setIsGenerating(true);
    const newBook = await generateBookContent();
    if (newBook) {
        setBook(newBook);
        setSelectedPageId(null);
    } else {
        alert("Errore nella generazione. Riprova.");
    }
    setIsGenerating(false);
  };

  const handleShare = (platform: string) => {
    const text = `Scopri il ricettario "${book.title}" di ${book.author}!`;
    const url = window.location.href;

    let shareLink = '';
    switch(platform) {
        case 'whatsapp':
            shareLink = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        case 'facebook':
            shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
        case 'copy':
            navigator.clipboard.writeText(url);
            setIsShareOpen(false);
            return;
    }
    if (shareLink) window.open(shareLink, '_blank');
    setIsShareOpen(false);
  };

  const filteredRecipes = recipes.filter(r => 
    r.content?.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.content?.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFallbackImage = (category: string) => {
      const cat = category.toLowerCase();
      if (cat.includes('biscotti') || cat.includes('dolci') || cat.includes('torta') || cat.includes('torte')) {
          return "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop&q=80";
      }
      return "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80";
  };

  const getSmartImageUrl = (content: any, id: number) => {
      const t = content.title.toLowerCase();
      let englishSubject = content.title; // Fallback to Italian title if no match

      // 1. Panini al Latte di Riso
      if (t.includes('latte') && t.includes('riso')) {
         englishSubject = "soft round milk buns, golden brown crust, sesame seeds, fluffy texture";
      } 
      // 2. Focaccia Alta al Rosmarino
      else if (t.includes('focaccia') && t.includes('rosmarino')) {
         englishSubject = "thick fluffy focaccia bread with rosemary, olive oil pools, coarse salt, golden dimpled crust";
      }
      // 3. Pane in Cassetta al Grano Saraceno
      else if (t.includes('cassetta') || (t.includes('saraceno') && t.includes('pane'))) {
         englishSubject = "sliced buckwheat sandwich bread loaf, dark rustic crust, dense healthy crumb";
      }
      // 4. Ciabatta Croccante Senza Impasto
      else if (t.includes('ciabatta')) {
         englishSubject = "artisan ciabatta bread, irregular shape, flour dusted crispy crust, airy porous crumb";
      }
      // 5. Baguette Rustica ai Semi
      else if (t.includes('baguette')) {
         englishSubject = "rustic baguette coated with mixed seeds, deep diagonal scores, crispy golden crust";
      }
      // 6. Pizza in Teglia Soffice
      else if (t.includes('pizza')) {
         englishSubject = "rectangular slice of thick pan pizza, tomato sauce, mozzarella cheese, fresh basil";
      }
      // 7. Torta Soffice Yogurt e Cocco
      else if (t.includes('torta') || (t.includes('yogurt') && t.includes('cocco'))) {
         englishSubject = "slice of soft white yogurt cake with coconut, shredded coconut topping, moist texture, elegant plating";
      }
      // 8. Cookies Americani
      else if (t.includes('cookies') || t.includes('americani')) {
         englishSubject = "stack of large chewy american chocolate chip cookies, melted chocolate chunks, golden edges";
      }
      // 9. Canestrelli Friabili
      else if (t.includes('canestrelli')) {
         englishSubject = "flower shaped shortbread biscuits with center hole, heavy powdered sugar dusting, pale butter texture";
      }
      // 10. Cantucci alle Mandorle
      else if (t.includes('cantucci') || t.includes('tozzetti')) {
         englishSubject = "traditional almond biscotti, oblong shape, twice baked, whole almonds visible in cross section";
      }
      // Fallback for categories
      else if (content.category === 'Pane') {
          englishSubject = "freshly baked gluten-free bread loaf, rustic style";
      } else {
          englishSubject = "gourmet gluten-free dessert, elegant pastry";
      }

      // Construct the prompt exactly as requested
      const prompt = `Detailed, high-quality food photography of ${englishSubject}, gluten-free bakery, cinematic natural lighting, shallow depth of field, 8k resolution, highly detailed texture, rustic wood table background, minimalist style`;
      
      // Unique seed
      const seed = t.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0) + (id * 123); 
      
      return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=768&nologo=true&seed=${seed}&model=flux`;
  };

  // --- BIO VIEW ---
  if (showBio) {
      return (
          <BioPage onBack={handleBackFromBio} logoUrl={logoUrl} />
      );
  }

  // --- DETAIL VIEW ---
  if (selectedPageId !== null) {
    const pageData = book.pages.find(p => p.id === selectedPageId);
    if (pageData) {
      return (
        <div className="animate-slide-in">
            <RecipePage 
                data={pageData} 
                onBack={handleBack} 
                authorName={book.author}
                autoPrint={autoPrint}
                logoUrl={logoUrl}
                heroImage={selectedImage || undefined}
                onAuthorClick={handleAuthorClick}
            />
        </div>
      );
    }
  }

  // --- HOME / LIST VIEW ---
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 font-sans selection:bg-amber-900/40 pb-20 relative animate-slide-in">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Navbar Graphite - Minimal */}
      <nav className="sticky top-0 z-40 bg-[#121212]/90 backdrop-blur-md border-b border-white/5 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo in Navbar is smaller now, as main logo is in hero */}
            <div className="flex items-center gap-4 opacity-0 md:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/10 p-1">
                    <img src={logoUrl} alt="Logo" className="w-full h-full object-contain opacity-70" />
                </div>
                <span className="font-serif text-sm font-bold text-gray-400 tracking-wider">Il Forno</span>
            </div>
            
            <div className="flex items-center gap-3">
                 {/* Social Share Dropdown */}
                <div 
                    className="relative group z-50"
                    onMouseEnter={() => setIsShareOpen(true)}
                    onMouseLeave={() => setIsShareOpen(false)}
                >
                    <button 
                        className={`p-2 rounded-md transition-all duration-300 ${isShareOpen ? 'text-amber-400 bg-white/5' : 'text-gray-400 hover:text-amber-400 hover:bg-white/5'}`}
                        title="Condividi"
                    >
                        <Share2 size={18} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute right-0 top-full mt-2 flex flex-col gap-2 p-2 bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl transition-all duration-300 origin-top-right w-48 ${isShareOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                        <button onClick={() => handleShare('whatsapp')} className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-md text-sm text-gray-200 hover:text-[#25D366] transition-colors">
                            <MessageCircle size={18} /> WhatsApp
                        </button>
                        <button onClick={() => handleShare('facebook')} className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-md text-sm text-gray-200 hover:text-[#1877F2] transition-colors">
                            <Facebook size={18} /> Facebook
                        </button>
                        <button onClick={() => handleShare('copy')} className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-md text-sm text-gray-200 hover:text-amber-400 transition-colors">
                            <LinkIcon size={18} /> Copia Link
                        </button>
                    </div>
                </div>

                 <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-3 h-3 group-focus-within:text-amber-500 transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Cerca..." 
                        className="pl-9 pr-4 py-1.5 bg-[#1a1a1a] border border-white/10 rounded-full text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 w-28 md:w-48 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                 </div>
                 <button 
                    onClick={handleGenerateNew}
                    disabled={isGenerating}
                    className="p-2 text-gray-400 hover:text-amber-400 hover:bg-white/5 rounded-md transition-all border border-transparent hover:border-white/5"
                    title="Rigenera Ricettario"
                >
                    <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                </button>
            </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Header Block - NEW MODERN CENTERED DESIGN */}
        <div className="relative mb-24 pt-10 pb-12">
            
            {/* Centered modern layout */}
            <div className="flex flex-col items-center text-center z-10 relative">
                
                {/* Prominent Logo */}
                <div className="w-24 h-24 md:w-32 md:h-32 mb-10 p-1.5 rounded-full border border-amber-500/20 bg-[#121212] shadow-[0_0_40px_rgba(245,158,11,0.15)] flex items-center justify-center transform hover:scale-105 transition-transform duration-700">
                    <img src={logoUrl} alt="Il Forno Logo" className="w-full h-full object-contain opacity-90 p-2" />
                </div>

                {/* Main Title */}
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400 mb-6 tracking-tight leading-[0.9] drop-shadow-2xl">
                    Pane & Biscotti
                </h1>

                {/* Subtitle / Slogan */}
                <div className="relative flex flex-col items-center gap-4">
                     <span className="font-hand text-3xl md:text-5xl text-amber-500 transform -rotate-2 drop-shadow-lg">
                        Senza Glutine e Senza Compromessi
                     </span>
                     
                     <div className="flex items-center gap-4 mt-2 opacity-60">
                         <div className="h-px w-8 bg-white/30"></div>
                         <span className="font-serif text-sm md:text-base text-gray-300 tracking-[0.3em] uppercase font-light">
                            A Casa Tua
                         </span>
                         <div className="h-px w-8 bg-white/30"></div>
                     </div>
                </div>

                {/* Author Button (Minimal) */}
                <div 
                    onClick={handleAuthorClick}
                    className="mt-12 group cursor-pointer flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
                >
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Ricette di</span>
                    <span className="font-serif italic text-gray-300 border-b border-transparent group-hover:border-amber-500/50 transition-colors">Tony Martins</span>
                </div>
            </div>
            
            {/* Floating GF Badge - Absolute positioned to the side (Desktop) or floating (Mobile) */}
            <div className="absolute top-0 right-4 lg:right-12 hidden md:block animate-fade-in z-0 opacity-80 hover:opacity-100 transition-opacity">
                <div className="relative w-28 h-28 lg:w-32 lg:h-32 group cursor-default" title="100% Senza Glutine">
                     {/* Rotating outer ring */}
                     <div className="absolute inset-0 border border-dashed border-amber-500/30 rounded-full animate-[spin_12s_linear_infinite]"></div>
                     
                     <div className="absolute inset-2 bg-[#121212] rounded-full border border-white/10 flex flex-col items-center justify-center shadow-2xl backdrop-blur-sm">
                        <Award size={22} className="text-amber-500 mb-1 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                        <span className="text-[9px] font-bold uppercase text-gray-400 tracking-wider">Certified</span>
                        <span className="text-[10px] font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 tracking-tight leading-none mt-0.5">Gluten Free</span>
                     </div>
                </div>
            </div>

            {/* Background Grain/Logo Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none z-0">
                 <img src={logoUrl} alt="" className="w-[800px] h-[800px] grayscale" />
            </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((page) => {
                const content = page.content!;
                const imageUrl = getSmartImageUrl(content, page.id);

                return (
                    <div 
                        key={page.id}
                        onClick={() => handleRecipeClick(page.id, imageUrl)}
                        className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 shadow-lg hover:shadow-amber-900/10 hover:border-amber-500/20 transition-all duration-500 cursor-pointer flex flex-col h-full"
                    >
                        {/* Image Header */}
                        <div className="h-64 overflow-hidden relative">
                             <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent z-10 opacity-90"></div>
                             
                             {/* Category Tag */}
                             <div className="absolute top-4 left-4 z-20">
                                <span className="px-3 py-1 bg-[#121212]/90 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-300 shadow-xl">
                                    {content.category}
                                </span>
                             </div>

                            <img 
                                src={imageUrl} 
                                alt={content.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
                                loading="lazy"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = getFallbackImage(content.category);
                                }}
                            />
                        </div>

                        {/* Card Content */}
                        <div className="p-7 pt-2 flex flex-col flex-grow relative z-20">
                            <div className="mb-4">
                                <h3 className="font-serif text-2xl font-bold text-gray-100 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-200 group-hover:to-amber-500 transition-all duration-300">
                                    {content.title}
                                </h3>
                                <div className="h-0.5 w-8 bg-gradient-to-r from-amber-600 to-amber-300 group-hover:w-full transition-all duration-700 opacity-60"></div>
                            </div>
                            
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6 font-light">
                                {content.description}
                            </p>
                            
                            {/* Metadata Footer */}
                            <div className="mt-auto flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4 group-hover:border-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5">
                                        <Clock size={14} className="text-amber-600" />
                                        <span>{content.prepTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Flame size={14} className="text-amber-600" />
                                        <span>{content.cookTime}</span>
                                    </div>
                                </div>
                                <ArrowRight size={16} className="text-gray-600 group-hover:text-amber-400 transition-colors transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {filteredRecipes.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 text-gray-500 bg-[#1a1a1a] rounded-xl border border-dashed border-white/10">
                <BookOpen size={48} className="text-gray-700 mb-4" />
                <p className="font-serif text-xl">Nessuna ricetta in archivio.</p>
            </div>
        )}
      </main>

       {/* Footer Graphite */}
       <footer className="border-t border-white/5 mt-20 bg-[#0e0e0e] text-center py-12">
            <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
                <img src={logoUrl} alt="Logo" className="w-8 h-8 opacity-50 grayscale mb-4" />
                <p className="text-xs text-gray-500 tracking-[0.2em] uppercase">
                    © {new Date().getFullYear()} Tony Martins
                </p>
            </div>
       </footer>
    </div>
  );
};

export default AppLayout;