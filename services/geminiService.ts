
import { GoogleGenAI } from "@google/genai";

export const generateSpiritualReflections = async (name: string = "شعبان بحيري") => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `أريد دعاءً إسلامياً قصيراً ومؤثراً لروح الفقيد ${name}. 
      هام جداً: اكتب نص الدعاء مباشرة فقط. 
      ممنوع تماماً كتابة أي مقدمات مثل "إليك الدعاء" أو "هذا دعاء" أو "تفضل". 
      ممنوع كتابة أي تعليقات قبل أو بعد النص. 
      أريد الكلمات التي نناجي بها الله فقط.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      },
    });

    const text = response.text;
    // تنظيف إضافي للتأكد من خلو النص من أي "إليك هذا" إذا حاول الموديل إضافتها
    let cleanedText = text ? text.trim() : "";
    cleanedText = cleanedText.replace(/^(إليك|تفضل|هذا|الدعاء|القصير|الروحاني).*?:/g, "").trim();
    
    return cleanedText || "اللهم اغفر لـ شعبان بحيري وارحمه واجعل قبره روضة من رياض الجنة.";
  } catch (error) {
    console.error("Error generating reflection:", error);
    return "اللهم اغفر لـ شعبان بحيري وموتى المسلمين واجعل قبورهم روضة من رياض الجنة.";
  }
};
