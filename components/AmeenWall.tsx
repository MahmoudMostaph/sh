
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const AmeenWall: React.FC = () => {
  const [count, setCount] = useState(2540);
  const [hasVoted, setHasVoted] = useState(false);

  const handleAmeen = () => {
    if (!hasVoted) {
      setCount(prev => prev + 1);
      setHasVoted(true);
      if ('vibrate' in navigator) navigator.vibrate(50);
    }
  };

  return (
    <section className="my-16 px-4">
      <div className="max-w-xl mx-auto glass-card rounded-[2rem] p-10 text-center shadow-2xl shadow-emerald-900/5 border-t-4 border-emerald-600">
        <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart fill={hasVoted ? "#059669" : "none"} className="text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">قُل آمين</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          انضم إلينا في الدعاء للفقيد شعبان بحيري. ضغطتك هي "آمين" صادقة من القلب.
        </p>
        
        <button 
          onClick={handleAmeen}
          className={`group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform active:scale-95 ${
            hasVoted 
              ? 'bg-emerald-100 text-emerald-800 cursor-default' 
              : 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-1'
          }`}
        >
          <span>{hasVoted ? 'آمين يا رب العالمين' : 'آمين'}</span>
          {!hasVoted && <Heart size={20} className="group-hover:fill-white" />}
        </button>
        
        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-center gap-2">
          <div className="flex -space-x-2 overflow-hidden">
             {[1,2,3].map(i => (
               <div key={i} className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-emerald-200"></div>
             ))}
          </div>
          <span className="text-slate-400 text-sm">
            أكثر من <span className="font-bold text-emerald-600">{count.toLocaleString()}</span> دعوة مسجلة
          </span>
        </div>
      </div>
    </section>
  );
};

export default AmeenWall;
