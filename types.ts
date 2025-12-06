
export enum PageType {
  COVER = 'COVER',
  TOC = 'TOC',
  RECIPE = 'RECIPE',
  BACK_COVER = 'BACK_COVER'
}

export interface Ingredient {
  item: string;
  amount: string;
}

export interface RecipeContent {
  title: string;
  description: string;
  category: 'Pane' | 'Biscotti' | 'Torte';
  prepTime: string;
  riseTime: string;
  cookTime: string;
  ingredients: Ingredient[];
  instructions: string[];
  tips: string;
}

export interface PageData {
  id: number;
  type: PageType;
  content?: RecipeContent;
  title?: string; // For TOC or Cover
  subtitle?: string; // For Cover
  items?: { title: string; pageNum: number }[]; // For TOC
}

export interface BookData {
  title: string;
  author: string;
  pages: PageData[];
}
