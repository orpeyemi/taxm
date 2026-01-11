
import { GoogleGenAI, Type } from "@google/genai";

export const getIndustryTaxAdvice = async (industryName: string) => {
  // Always use { apiKey: process.env.API_KEY } directly as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `As a professional tax consultant, provide 3 brief, specific tax tips or financial considerations for the ${industryName} industry.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          industry: { type: Type.STRING },
          advice: { type: Type.STRING, description: "A one sentence summary of general advice." },
          keyPoints: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Three high-impact tax tips for this specific industry."
          }
        },
        required: ["industry", "advice", "keyPoints"]
      }
    }
  });

  // Access .text property (not a method) as per guidelines
  const text = response.text;
  if (!text) {
    throw new Error("No response from AI");
  }
  return JSON.parse(text);
};
