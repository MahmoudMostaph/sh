
import { GoogleGenAI } from "@google/genai";

export const generateSpiritualReflections = async (name: string = "شعبان بحيري") => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `اكتب دعاءً إسلامياً قصيراً ومؤثراً جداً لروح المرحوم ${name}. 
      الشروط:
      1. نص الدعاء فقط.
      2. لا تكتب "تفضل" أو "إليك الدعاء" أو أي جمل تمهيدية.
      3. لا تضع حركات مبالغ فيها إذا كانت تسبب تداخلاً في النص.
      4. اجعل الدعاء يلمس القلب ويركز على الرحمة والمغفرة ونور القبر.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });

    const text = response.text;
    let cleanedText = text ? text.trim() : "";
    
    // إزالة أي علامات تنصيص أو مقدمات قد يفلت بها الذكاء الاصطناعي
    cleanedText = cleanedText.replace(/^["'«](.*)["'»]$/, '$1');
    cleanedText = cleanedText.replace(/^(هذا هو|إليك|الدعاء|تفضل).*?:/g, "").trim();
    
    return cleanedText || "اللهم اغفر لـ المرحوم شعبان بحيري وارحمه واجعل قبره روضة من رياض الجنة وأسكنه الفردوس الأعلى.";
  } catch (error) {
    console.error("Gemini Service Error:", error);
    return "اللهم اغفر لـ المرحوم شعبان بحيري وموتى المسلمين، اللهم أبدله داراً خيراً من داره وأهلاً خيراً من أهله.";
  }
};
