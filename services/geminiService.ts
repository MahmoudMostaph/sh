
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSpiritualReflections = async (name: string = "شعبان بحيري") => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `أريد كتابة دعاء جميل ومؤثر جداً باللغة العربية لشخص متوفى اسمه ${name}. اجعل الدعاء يركز على الرحمة والمغفرة والجنة والصدقة الجارية. يرجى كتابة نص الدعاء مباشرة دون أي مقدمات أو عبارات إضافية مثل "إليك هذا الدعاء".`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating reflection:", error);
    return "اللهم اغفر لـ شعبان بحيري وموتى المسلمين واجعل قبورهم روضة من رياض الجنة.";
  }
};
