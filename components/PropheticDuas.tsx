
import React from 'react';
import { PROPHETIC_DUAS } from '../constants';
import { Star } from 'lucide-react';

const PropheticDuas: React.FC = () => {
  return (
    <section id="prophetic-duas" className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-emerald-900 font-serif-arabic inline-flex items-center gap-3">
          <Star className="text-emerald-500" fill="currentColor" size={24} />
          أدعية مأثورة عن النبي ﷺ
          <Star className="text-emerald-500" fill="currentColor" size={24} />
        </h2>
        <p className="text-slate-500 mt-2">أصح ما ورد عن النبي صلى الله عليه وسلم في الدعاء للميت</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {PROPHETIC_DUAS.map((dua) => (
          <div 
            key={dua.id} 
            className="bg-white border-l-4 border-emerald-600 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative group"
          >
            <div className="absolute top-4 left-4 text-emerald-100 group-hover:text-emerald-200 transition-colors">
              <Star size={40} strokeWidth={1} />
            </div>
            <p className="text-xl md:text-2xl text-slate-800 font-serif-arabic leading-relaxed mb-6 text-right">
              {dua.text}
            </p>
            <div className="flex justify-start items-center gap-2">
              <div className="h-px w-8 bg-emerald-200"></div>
              <span className="text-emerald-600 text-sm font-medium">{dua.source}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropheticDuas;
