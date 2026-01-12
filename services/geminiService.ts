
import { GoogleGenAI, Type } from "@google/genai";

export const getIndustryDeepDive = async (industryName: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `As a senior tax strategist at Fexi Us Tax Services, provide a comprehensive tax and financial profile for the ${industryName} industry. Detail the specific regulatory environment, common pitfalls, and strategic opportunities.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          industryName: { type: Type.STRING },
          overview: { type: Type.STRING },
          challenges: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          complianceChecklist: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          strategicOpportunities: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING }
              }
            },
          },
          futureOutlook: { type: Type.STRING }
        },
        required: ["industryName", "overview", "challenges", "complianceChecklist", "strategicOpportunities", "futureOutlook"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");
  return JSON.parse(text);
};

export const getPageContent = async (pageTitle: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Act as a senior consultant at Fexi Us Tax Services. Provide professional and informative content for a webpage titled "${pageTitle}". The content should be structured for a premium financial services website.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          subtitle: { type: Type.STRING },
          introduction: { type: Type.STRING },
          sections: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                heading: { type: Type.STRING },
                body: { type: Type.STRING }
              },
              required: ["heading", "body"]
            }
          },
          callToAction: { type: Type.STRING }
        },
        required: ["title", "subtitle", "introduction", "sections", "callToAction"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");
  return JSON.parse(text);
};
