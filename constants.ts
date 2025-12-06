import { BookData, PageType } from './types';

export const INITIAL_BOOK: BookData = {
  title: "Il Forno Senza Glutine",
  author: "Tony Martins . Tec. Alimentare AFC (CH)",
  pages: [
    {
      id: 1,
      type: PageType.COVER,
      title: "Il Forno Senza Glutine",
      subtitle: "10 Ricette Garantite: Pane & Dolci",
    },
    {
      id: 2,
      type: PageType.TOC,
      title: "Indice",
      items: [
        { title: "Panini al Latte di Riso", pageNum: 3 },
        { title: "Focaccia Alta al Rosmarino", pageNum: 4 },
        { title: "Pane in Cassetta al Grano Saraceno", pageNum: 5 },
        { title: "Ciabatta Croccante Senza Impasto", pageNum: 6 },
        { title: "Baguette Rustica ai Semi (Ricetta TOP)", pageNum: 7 },
        { title: "Pizza in Teglia Soffice", pageNum: 8 },
        { title: "Torta Soffice Yogurt e Cocco", pageNum: 9 },
        { title: "Cookies Americani", pageNum: 10 },
        { title: "Canestrelli Friabili", pageNum: 11 },
        { title: "Cantucci alle Mandorle", pageNum: 12 },
      ]
    },
    // --- PANE (6 Ricette) ---
    {
      id: 3,
      type: PageType.RECIPE,
      content: {
        title: "Panini al Latte di Riso",
        category: "Pane",
        description: "Panini morbidissimi, ideali per essere farciti. Ricetta collaudata.",
        prepTime: "10 min",
        riseTime: "1 ora",
        cookTime: "20 min",
        ingredients: [
          { item: "Mix Pane Senza Glutine (bianca)", amount: "300g" },
          { item: "Latte di riso tiepido", amount: "220ml" },
          { item: "Lievito di birra secco", amount: "7g" },
          { item: "Olio di semi", amount: "20ml" },
          { item: "Miele o Zucchero", amount: "1 cucchiaino" }
        ],
        instructions: [
          "Sciogli il lievito e il miele nel latte tiepido (attiva la lievitazione).",
          "In una ciotola, versa il Mix Pane e aggiungi il liquido poco alla volta.",
          "Unisci l'olio e un pizzico di sale, impasta per 5 minuti.",
          "Forma 6 palline lisce con le mani unte.",
          "Lascia lievitare su teglia coperta per 1 ora (devono raddoppiare).",
          "Spennella con latte e cuoci a 200°C per 20 minuti."
        ],
        tips: "Per una crosta dorata, metti un pentolino d'acqua sul fondo del forno."
      }
    },
    {
      id: 4,
      type: PageType.RECIPE,
      content: {
        title: "Focaccia Alta al Rosmarino",
        category: "Pane",
        description: "Alta, soffice e piena di bolle. Impossibile da sbagliare.",
        prepTime: "10 min",
        riseTime: "1h 30m",
        cookTime: "25 min",
        ingredients: [
          { item: "Mix Pane Senza Glutine", amount: "400g" },
          { item: "Acqua frizzante tiepida", amount: "350ml" },
          { item: "Lievito di birra fresco", amount: "15g" },
          { item: "Olio EVO", amount: "40ml" },
          { item: "Sale grosso", amount: "q.b" }
        ],
        instructions: [
          "Sciogli il lievito nell'acqua frizzante (aiuta l'alveolatura).",
          "Mescola il Mix Pane e l'acqua con una forchetta, l'impasto sarà appiccicoso.",
          "Aggiungi olio e sale fino, mescola bene.",
          "Versa in teglia unta, stendi con le mani unte.",
          "Fai lievitare 1h 30m in forno spento con luce accesa.",
          "Fai i buchi con le dita, condisci e cuoci a 220°C per 25 min."
        ],
        tips: "Non sgonfiare l'impasto quando fai i buchi, sii delicato."
      }
    },
    {
      id: 5,
      type: PageType.RECIPE,
      content: {
        title: "Pane in Cassetta Saraceno",
        category: "Pane",
        description: "Rustico e profumato, perfetto tostato per colazione.",
        prepTime: "10 min",
        riseTime: "1 ora",
        cookTime: "40 min",
        ingredients: [
          { item: "Farina di Grano Saraceno", amount: "250g" },
          { item: "Amido di Mais", amount: "150g" },
          { item: "Acqua tiepida", amount: "300ml" },
          { item: "Lievito secco", amount: "7g" },
          { item: "Psillio o Xantano (opzionale)", amount: "1 cucchiaino" }
        ],
        instructions: [
          "Miscela le farine e il lievito secco.",
          "Aggiungi l'acqua tiepida e impasta energicamente (anche con fruste elettriche).",
          "Versa in uno stampo da plumcake foderato di carta forno.",
          "Livella la superficie con un cucchiaio bagnato.",
          "Lievitazione: 1 ora al caldo.",
          "Cuoci a 190°C per 40 minuti. Fai raffreddare prima di tagliare."
        ],
        tips: "L'impasto deve avere la consistenza di una crema densa, non di una palla."
      }
    },
    {
      id: 6,
      type: PageType.RECIPE,
      content: {
        title: "Ciabatta Croccante",
        category: "Pane",
        description: "Crosta croccante e interno leggero, senza impastare.",
        prepTime: "5 min",
        riseTime: "2 ore",
        cookTime: "35 min",
        ingredients: [
          { item: "Mix Pane Rustico Senza Glutine", amount: "300g" },
          { item: "Acqua a temperatura ambiente", amount: "280ml" },
          { item: "Lievito di birra secco", amount: "2g (poco!)" },
          { item: "Sale", amount: "1 cucchiaino" },
          { item: "Farina di Riso (per spolvero)", amount: "q.b." }
        ],
        instructions: [
          "In una ciotola grande mescola il Mix Pane, il lievito e il sale.",
          "Aggiungi l'acqua e mescola brevemente con un cucchiaio.",
          "Copri ermeticamente e lascia lievitare 2 ore (o più se puoi).",
          "Rovescia delicatamente su piano infarinato con Farina di Riso.",
          "Dividi in 2 ciabatte, sposta su teglia.",
          "Cuoci a 220°C statico per 35 min."
        ],
        tips: "Il segreto è l'alta idratazione e toccare l'impasto il meno possibile."
      }
    },
    {
      id: 7,
      type: PageType.RECIPE,
      content: {
        title: "Baguette Rustica ai Semi",
        category: "Pane",
        description: "La ricetta definitiva: crosta super croccante, mollica alveolata e gusto ricco.",
        prepTime: "15 min",
        riseTime: "1h 15m",
        cookTime: "30 min",
        ingredients: [
          { item: "Mix Pane Scuro o Rustico Senza Glutine", amount: "350g" },
          { item: "Acqua tiepida", amount: "290ml" },
          { item: "Lievito di birra fresco", amount: "12g" },
          { item: "Semi misti (Girasole, Lino, Sesamo)", amount: "60g" },
          { item: "Olio Extravergine d'Oliva", amount: "20ml" },
          { item: "Miele (per attivare)", amount: "1 cucchiaino" },
          { item: "Sale", amount: "8g" }
        ],
        instructions: [
          "Sciogli il lievito e il miele nell'acqua tiepida e lascia agire 5 minuti.",
          "In una ciotola capiente, mescola il Mix Pane con 50g di semi (tieni il resto per la superficie).",
          "Versa l'acqua e impasta energicamente (con cucchiaio o mano) per 5 minuti. Unisci olio e sale solo alla fine.",
          "Lascia riposare l'impasto 10 minuti per idratare le fibre.",
          "Dividi l'impasto in 2 o 3 parti su un piano spolverato di Farina di Riso.",
          "Arrotola delicatamente ogni pezzo formando filoni lunghi e stretti (non schiacciare troppo).",
          "Spennella la superficie con acqua e rotola nei semi rimasti.",
          "Adagia su teglia con carta forno (crea delle pieghe nella carta tra una baguette e l'altra per mantenerne la forma).",
          "Fai tagli obliqui profondi con una lametta affilata.",
          "Lievitazione: 1 ora al riparo da correnti d'aria.",
          "Cuoci a 220°C statico per 30 min (fondamentale: metti cubetti di ghiaccio o un pentolino d'acqua sul fondo del forno per il vapore)."
        ],
        tips: "Il vapore nei primi 15 minuti è il segreto assoluto per la crosta croccante e l'apertura dei tagli."
      }
    },
    {
      id: 8,
      type: PageType.RECIPE,
      content: {
        title: "Pizza in Teglia Soffice",
        category: "Pane",
        description: "La classica pizza del sabato sera, alta e digeribile.",
        prepTime: "10 min",
        riseTime: "2 ore",
        cookTime: "15 min",
        ingredients: [
          { item: "Mix Pizza/Pane Senza Glutine", amount: "350g" },
          { item: "Acqua", amount: "280ml" },
          { item: "Lievito di birra", amount: "8g" },
          { item: "Olio EVO", amount: "20g" },
          { item: "Passata di pomodoro", amount: "200g" }
        ],
        instructions: [
          "Impasta il Mix, acqua e lievito. Aggiungi olio e sale alla fine.",
          "L'impasto sarà morbido. Ungi bene la teglia.",
          "Stendi l'impasto con le mani unte direttamente in teglia.",
          "Lascia lievitare nel forno spento per 2 ore.",
          "Condisci con pomodoro (mozzarella solo a metà cottura).",
          "Cuoci a 230°C (massima potenza) per 15-20 min."
        ],
        tips: "Cuoci i primi 10 minuti nella parte bassa del forno per una base croccante."
      }
    },

    // --- DOLCI / BISCOTTI / TORTE (4 Ricette) ---
    {
      id: 9,
      type: PageType.RECIPE,
      content: {
        title: "Torta Soffice Yogurt e Cocco",
        category: "Torte",
        description: "Una nuvola bianca, umida e profumatissima. Lo yogurt greco rende l'impasto morbidissimo.",
        prepTime: "15 min",
        riseTime: "Nessuna",
        cookTime: "40 min",
        ingredients: [
          { item: "Farina di Riso finissima", amount: "180g" },
          { item: "Fecola di Patate", amount: "70g" },
          { item: "Farina di Cocco (rapé)", amount: "60g" },
          { item: "Yogurt Greco Bianco", amount: "150g" },
          { item: "Zucchero semolato", amount: "160g" },
          { item: "Uova medie", amount: "3" },
          { item: "Olio di semi", amount: "100ml" },
          { item: "Lievito per dolci", amount: "1 bustina" }
        ],
        instructions: [
          "Monta le uova con lo zucchero con le fruste elettriche per 5 minuti finché sono chiare e spumose.",
          "Aggiungi lo yogurt greco e l'olio a filo, continuando a mescolare a bassa velocità.",
          "In una ciotola a parte, setaccia farina di riso, fecola e lievito. Unisci il cocco rapé.",
          "Incorpora le polveri al composto liquido poco alla volta, mescolando delicatamente dal basso verso l'alto.",
          "Versa in una tortiera da 22-24cm imburrata e infarinata (o con carta forno).",
          "Cuoci in forno statico preriscaldato a 180°C per circa 40 minuti (fai prova stecchino).",
          "Lascia raffreddare completamente prima di sformare."
        ],
        tips: "Se ti piace più umida, usa yogurt al cocco al posto di quello bianco."
      }
    },
    {
      id: 10,
      type: PageType.RECIPE,
      content: {
        title: "Cookies Americani",
        category: "Biscotti",
        description: "Grandi, irregolari e pieni di cioccolato.",
        prepTime: "10 min",
        riseTime: "20 min (frigo)",
        cookTime: "15 min",
        ingredients: [
          { item: "Farina - Mix Dolci Senza Glutine", amount: "200g" },
          { item: "Burro morbido", amount: "100g" },
          { item: "Zucchero di canna", amount: "100g" },
          { item: "Uovo", amount: "1" },
          { item: "Gocce Cioccolato", amount: "100g" }
        ],
        instructions: [
          "Lavora burro e zucchero a crema.",
          "Unisci l'uovo.",
          "Unisci il Mix Dolci e il cioccolato.",
          "Fai palline grandi come noci, schiacciale leggermente.",
          "Frigo 20 min.",
          "Cuoci 180°C per 15 min (devono essere morbidi al centro)."
        ],
        tips: "Lasciali raffreddare in teglia o si rompono."
      }
    },
    {
      id: 11,
      type: PageType.RECIPE,
      content: {
        title: "Canestrelli Friabili",
        category: "Biscotti",
        description: "Si sciolgono in bocca grazie al tuorlo sodo.",
        prepTime: "15 min",
        riseTime: "30 min",
        cookTime: "15 min",
        ingredients: [
          { item: "Farina di Mais Fioretto", amount: "75g" },
          { item: "Fecola di Patate", amount: "75g" },
          { item: "Farina di Riso", amount: "50g" },
          { item: "Burro", amount: "120g" },
          { item: "Tuorli sodi", amount: "2" },
          { item: "Zucchero a velo", amount: "70g" }
        ],
        instructions: [
          "Setaccia i tuorli sodi.",
          "Impasta tutte le farine e il resto velocemente.",
          "Panetto in frigo 30 min.",
          "Stendi spessore 1cm, forma fiore col buco.",
          "Forno 170°C per 15 min."
        ],
        tips: "Abbondante zucchero a velo dopo la cottura."
      }
    },
    {
      id: 12,
      type: PageType.RECIPE,
      content: {
        title: "Cantucci alle Mandorle",
        category: "Biscotti",
        description: "Croccanti, perfetti da inzuppare nel vin santo o tè.",
        prepTime: "10 min",
        riseTime: "Nessuna",
        cookTime: "30 min (doppia)",
        ingredients: [
          { item: "Mix Dolci Senza Glutine", amount: "250g" },
          { item: "Zucchero", amount: "140g" },
          { item: "Mandorle intere (non pelate)", amount: "100g" },
          { item: "Uova", amount: "2" },
          { item: "Lievito per dolci", amount: "1 cucchiaino" }
        ],
        instructions: [
          "Monta uova e zucchero.",
          "Aggiungi Mix e lievito, poi le mandorle intere.",
          "Forma due filoncini lunghi su teglia.",
          "Cuoci 20 min a 180°C.",
          "Sforna, taglia a fette oblique, tosta ancora 10 min."
        ],
        tips: "Il taglio va fatto quando l'impasto è caldo ma non bollente."
      }
    },
    {
      id: 13,
      type: PageType.BACK_COVER,
      title: "Buon Appetito!",
      subtitle: "La cucina senza glutine è gioia."
    }
  ]
};

export const GENERATE_PROMPT = `
Agisci come un Maestro Panificatore e Pasticcere specializzato in cucina SENZA GLUTINE (Gluten Free).
Il tuo compito è creare un libro di ricette in formato JSON.

REQUISITI QUANTITÀ E TIPOLOGIA (TASSATIVI):
Genera ESATTAMENTE 10 ricette totali, divise così:
- 6 Ricette di PANE (60%): Spazia tra Ciabatta, Panini, Focaccia Alta, Baguette, Pane in Cassetta, Pizza.
- 4 Ricette DOLCI (40%): Spazia tra Biscotti classici, Cookies e Torte semplici (es. Torta allo Yogurt, Plumcake).

REQUISITI QUALITÀ RICETTE:
1. TESTATE E GARANTITE: Le ricette devono essere realistiche, con proporzioni corrette di liquidi/addensanti per evitare l'effetto "sbricioloso" tipico del senza glutine.
2. LIEVITAZIONE PERFETTA: Per il pane, indica chiaramente i tempi e i trucchi per una lievitazione alta e alveolata.
3. INGREDIENTI:
   - Usa "Mix Pane Senza Glutine" o "Mix Dolci Senza Glutine" per le miscele commerciali.
   - NON scrivere "Senza Glutine" accanto a ingredienti naturalmente privi di glutine (es. Farina di Riso, Maizena, Grano Saraceno, Farina di Mais, Fecola, Uova, Zucchero, Fiocchi d'Avena, Farina di Mandorle).
   - Scrivilo SOLO se è un mix generico o un ingrediente lavorato a rischio (es. "Lievito per dolci", "Mix Universale").
4. PROCEDIMENTO CHIARO: Massimo 10-15 minuti di preparazione attiva. Spiega passo passo in modo semplice.
5. LINGUA: Italiano professionale ma accogliente.

Struttura JSON richiesta:
{
  "title": "Titolo Creativo del Libro",
  "author": "Tony Martins . Tec. Alimentare AFC (CH)",
  "recipes": [
     {
       "title": "Nome Ricetta",
       "category": "Pane" | "Biscotti" | "Torte",
       "description": "Breve descrizione accattivante",
       "prepTime": "10 min",
       "riseTime": "...",
       "cookTime": "...",
       "ingredients": [ {"item": "Nome Ingrediente", "amount": "..."} ],
       "instructions": [ "Passaggio 1...", "Passaggio 2..." ],
       "tips": "Un consiglio segreto."
     }
  ]
}
Non aggiungere markdown o altro testo, restituisci solo il JSON valido.
`;