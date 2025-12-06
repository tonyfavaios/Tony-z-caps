import { GoogleGenAI, Type } from "@google/genai";
import { BookData, PageType, RecipeContent, PageData } from "../types";
import { GENERATE_PROMPT } from "../constants";

const getClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("API Key is missing");
    }
    return new GoogleGenAI({ apiKey });
};

export const generateBookContent = async (): Promise<BookData | null> => {
    try {
        const ai = getClient();
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: GENERATE_PROMPT,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        author: { type: Type.STRING },
                        recipes: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    title: { type: Type.STRING },
                                    category: { type: Type.STRING, enum: ["Pane", "Biscotti"] },
                                    description: { type: Type.STRING },
                                    prepTime: { type: Type.STRING },
                                    riseTime: { type: Type.STRING },
                                    cookTime: { type: Type.STRING },
                                    ingredients: {
                                        type: Type.ARRAY,
                                        items: {
                                            type: Type.OBJECT,
                                            properties: {
                                                item: { type: Type.STRING },
                                                amount: { type: Type.STRING },
                                            }
                                        }
                                    },
                                    instructions: {
                                        type: Type.ARRAY,
                                        items: { type: Type.STRING }
                                    },
                                    tips: { type: Type.STRING }
                                }
                            }
                        }
                    }
                }
            }
        });

        const rawText = response.text;
        if (!rawText) return null;

        const data = JSON.parse(rawText);
        
        // Transform into BookData structure
        const pages: PageData[] = [];
        
        // Cover
        pages.push({
            id: 1,
            type: PageType.COVER,
            title: data.title,
            subtitle: "Ricette Facili e Veloci"
        });

        // TOC
        const tocItems = data.recipes.map((r: any, index: number) => ({
            title: r.title,
            pageNum: index + 3
        }));
        
        pages.push({
            id: 2,
            type: PageType.TOC,
            title: "Indice",
            items: tocItems
        });

        // Recipes
        data.recipes.forEach((r: any, index: number) => {
            pages.push({
                id: index + 3,
                type: PageType.RECIPE,
                content: r as RecipeContent
            });
        });

        // Back Cover
        pages.push({
            id: pages.length + 1,
            type: PageType.BACK_COVER,
            title: "Fine",
            subtitle: "Cucina con amore."
        });

        return {
            title: data.title,
            author: data.author,
            pages
        };

    } catch (error) {
        console.error("Error generating book:", error);
        return null;
    }
};