
import React from 'react';
import { QURAN_VERSES } from '../constants';

const QuranSection: React.FC = () => {
  return (
    <section id="quran" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-emerald-900 font-serif-arabic">آيات من الذكر الحكيم</h2>
      <div className="grid grid-cols-1 gap-6">
        {QURAN_VERSES.map((verse, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border-r-8 border-emerald-600 text-center md:text-right">
            <p className="text-2xl md:text-3xl font-serif-arabic text-slate-800 leading-loose mb-4">
              " {verse.text} "
            </p>
            <p className="text-emerald-700 font-medium">{verse.surah}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuranSection;
