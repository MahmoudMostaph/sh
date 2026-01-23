
import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Quote } from 'lucide-react';
import { INITIAL_DUAS } from '../constants';
import { generateSpiritualReflections } from '../services/geminiService';

const DuaSection: React.FC = () => {
  const [dynamicDua, setDynamicDua] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewDua = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await generateSpiritualReflections("شعبان بحيري");
      setDynamicDua(result);
    } catch (error) {
      console.error("Failed to fetch dua", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNewDua();
  }, [fetchNewDua]);

  return (
    <section id="duas" className="mb-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h2 className="text-3xl font-bold text-emerald-900 font-serif-arabic">أدعية للمرحوم</h2>
        <button 
          onClick={fetchNewDua}
          disabled={isLoading}
          className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors disabled:opacity-50 shadow-md"
        >
          <RefreshCw size={18} className={isLoading ? 'animate-spin' : ''} />
          <span>تجديد دعاء خاص</span>
        </button>
      </div>

      <div className="space-y-6">
        {dynamicDua && (
          <div className="bg-emerald-50 border-r-4 border-emerald-500 p-8 rounded-xl shadow-sm transition-all duration-500">
             <Quote className="text-emerald-300 mb-4" size={32} />
             <p className="text-xl md:text-2xl text-emerald-900 font-serif-arabic leading-loose">
               {dynamicDua}
             </p>
             <div className="mt-4 text-emerald-600 font-medium text-sm">— دعاء خاص لـ المرحوم شعبان بحيري</div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INITIAL_DUAS.map((dua) => (
            <div key={dua.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-emerald-200 transition-all">
              <p className="text-lg text-slate-700 font-serif-arabic leading-relaxed mb-4">{dua.text}</p>
              <span className="text-slate-400 text-xs italic">{dua.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DuaSection;
