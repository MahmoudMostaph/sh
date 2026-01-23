
import React, { useState, useCallback } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TASBEEH_PHRASES } from '../constants';

const DigitalMisbaha: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);

  const goal = 33; // تحديث الرقم ليكون متوافقاً مع السنة (33)

  const resetCount = useCallback(() => {
    setCount(0);
    setIsTransitioning(false);
  }, []);

  const nextPhrase = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TASBEEH_PHRASES.length);
    resetCount();
  }, [resetCount]);

  const prevPhrase = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TASBEEH_PHRASES.length) % TASBEEH_PHRASES.length);
    resetCount();
  }, [resetCount]);

  const handleIncrement = () => {
    if (isTransitioning) return;

    setClickEffect(true);
    setTimeout(() => setClickEffect(false), 150);

    const nextCount = count + 1;
    if (nextCount >= goal) {
      setCount(goal);
      setIsTransitioning(true);
      
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
      }

      setTimeout(() => {
        nextPhrase();
      }, 1200);
    } else {
      setCount(nextCount);
      if ('vibrate' in navigator) {
        navigator.vibrate(25);
      }
    }
  };

  const progress = (count / goal) * 100;
  const circumference = 2 * Math.PI * 90;

  return (
    <section id="misbaha" className="py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-emerald-900 font-serif-arabic mb-2">المسبحة الإلكترونية</h2>
          <div className="h-1 w-16 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-emerald-50 transition-all transform hover:shadow-emerald-900/5">
          <div className="bg-emerald-800 p-8 text-white text-center relative">
            <div className="flex justify-between items-center mb-6">
              <button onClick={prevPhrase} className="p-3 hover:bg-white/10 rounded-full transition-colors active:scale-90"><ChevronRight size={22} /></button>
              <span className="text-xs uppercase tracking-[0.2em] opacity-70 font-bold">الذِكر الحالي</span>
              <button onClick={nextPhrase} className="p-3 hover:bg-white/10 rounded-full transition-colors active:scale-90"><ChevronLeft size={22} /></button>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif-arabic min-h-[5rem] flex items-center justify-center leading-relaxed">
              {TASBEEH_PHRASES[currentIndex].text}
            </h3>
          </div>

          <div className="p-12 flex flex-col items-center justify-center bg-gradient-to-b from-white to-emerald-50/30">
            <div className={`relative w-72 h-72 transition-transform duration-150 ${clickEffect ? 'scale-95' : 'scale-100'}`}>
              <svg className="w-full h-full -rotate-90">
                <circle cx="144" cy="144" r="110" fill="transparent" stroke="#f1f5f9" strokeWidth="16" />
                <circle 
                  cx="144" cy="144" r="110" fill="transparent" 
                  stroke={isTransitioning ? "#10b981" : "#059669"} 
                  strokeWidth="16" 
                  strokeDasharray={2 * Math.PI * 110}
                  strokeDashoffset={2 * Math.PI * 110 - (progress / 100) * (2 * Math.PI * 110)}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              </svg>

              <button 
                onClick={handleIncrement}
                disabled={isTransitioning}
                className={`absolute inset-0 m-8 rounded-full flex flex-col items-center justify-center transition-all shadow-inner border-4 ${
                  isTransitioning 
                    ? 'bg-emerald-50 border-emerald-200' 
                    : 'bg-white border-slate-50 hover:bg-slate-50 active:shadow-emerald-900/10'
                }`}
              >
                {isTransitioning ? (
                  <CheckCircle2 size={80} className="text-emerald-500 animate-bounce" />
                ) : (
                  <>
                    <span className="text-8xl font-black text-emerald-950 tabular-nums">{count}</span>
                    <span className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-2">اضغط للتسبيح</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-10 flex gap-4">
              <button 
                onClick={resetCount}
                className="flex items-center gap-2 px-8 py-3 bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-all text-sm font-bold active:scale-95"
              >
                <RotateCcw size={16} />
                تصفير العداد
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMisbaha;
