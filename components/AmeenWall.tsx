
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const AmeenWall: React.FC = () => {
  const [count, setCount] = useState(1284); // Simulated initial count
  const [hasVoted, setHasVoted] = useState(false);

  const handleAmeen = () => {
    if (!hasVoted) {
      setCount(prev => prev + 1);
      setHasVoted(true);
    }
  };

  return (
    <section className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl border border-emerald-100 max-w-2xl mx-auto mb-16">
      <h3 className="text-2xl font-bold text-slate-800 mb-4">قُل آمين</h3>
      <p className="text-slate-600 mb-8 leading-relaxed">
        شاركنا الدعاء للفقيد شعبان بالرحمة والمغفرة. ضغطتك على الزر هي بمثابة "آمين" لدعائنا.
      </p>
      
      <div className="relative inline-block">
        <button 
          onClick={handleAmeen}
          className={`flex items-center justify-center gap-3 px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 active:scale-95 ${
            hasVoted 
              ? 'bg-emerald-100 text-emerald-700 cursor-default' 
              : 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700'
          }`}
        >
          <Heart fill={hasVoted ? "currentColor" : "none"} className={hasVoted ? 'text-emerald-600' : ''} />
          <span>{hasVoted ? 'آمين يا رب العالمين' : 'آمين'}</span>
        </button>
        {hasVoted && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-xs px-3 py-1 rounded-full animate-bounce">
            تم تسجيل دعائك
          </div>
        )}
      </div>
      
      <div className="mt-8 text-slate-400 text-sm">
        <span className="font-bold text-emerald-600">{count.toLocaleString()}</span> شخص قالوا آمين
      </div>
    </section>
  );
};

export default AmeenWall;
