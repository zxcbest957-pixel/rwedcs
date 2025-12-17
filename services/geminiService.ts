
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSecurityInsight = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Give me one short, professional, and practical cyber security tip for a login page in one sentence. Be concise.",
      config: {
        systemInstruction: "You are a world-class cybersecurity expert. Provide helpful, single-sentence advice.",
        temperature: 0.7,
      },
    });
    return response.text || "Keep your password unique and complex.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ensure multi-factor authentication is enabled for maximum security.";
  }
};
