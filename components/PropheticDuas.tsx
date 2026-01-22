
import React, { useState } from 'react';
import { PROPHETIC_DUAS } from '../constants';
import { Star, Copy, CheckCircle } from 'lucide-react';

const PropheticDuas: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section id="prophetic-duas" className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center space-x-4 mb-4 rtl:space-x-reverse">
          <div className="h-px w-8 md:w-16 bg-emerald-300"></div>
          <h2 className="text-3xl font-bold text-emerald-900 font-serif-arabic flex items-center gap-3">
            <Star className="text-emerald-500 fill-emerald-500" size={20} />
            أدعية مأثورة عن النبي ﷺ
            <Star className="text-emerald-500 fill-emerald-500" size={20} />
          </h2>
          <div className="h-px w-8 md:w-16 bg-emerald-300"></div>
        </div>
        <p className="text-slate-500 font-medium">مجموعة من أصح الأدعية الواردة في السنة النبوية المطهرة</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {PROPHETIC_DUAS.map((dua) => (
          <div 
            key={dua.id} 
            className="group relative bg-white border-r-4 border-emerald-600 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-emerald-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
                     {dua.id.replace('p', '')}
                   </div>
                   <span className="text-emerald-700/60 font-bold text-[10px] uppercase tracking-wider">من السنة الشريفة</span>
                </div>
                
                <button 
                  onClick={() => copyToClipboard(dua.text, dua.id)}
                  className="p-2 rounded-lg hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-all flex items-center gap-2"
                  title="نسخ الدعاء"
                >
                  {copiedId === dua.id ? (
                    <>
                      <span className="text-xs font-bold text-emerald-600">تم النسخ</span>
                      <CheckCircle size={18} />
                    </>
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>

              <p className="text-2xl md:text-3xl text-slate-800 font-serif-arabic leading-[1.8] text-right mb-8">
                {dua.text}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2 text-emerald-600">
                  <span className="text-sm font-bold">{dua.source}</span>
                </div>
                <div className="text-[10px] text-slate-300 font-serif-arabic italic">عليه أفضل الصلاة وأتم التسليم</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropheticDuas;
