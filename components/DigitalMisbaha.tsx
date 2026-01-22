
import React, { useState, useCallback } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TASBEEH_PHRASES } from '../constants';

const DigitalMisbaha: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goal = 30;

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

    const nextCount = count + 1;
    if (nextCount >= goal) {
      setCount(goal);
      setIsTransitioning(true);
      
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
      }

      // الانتقال التلقائي بعد ثانية واحدة
      setTimeout(() => {
        nextPhrase();
      }, 1000);
    } else {
      setCount(nextCount);
      if ('vibrate' in navigator) {
        navigator.vibrate(20);
      }
    }
  };

  const progress = (count / goal) * 100;
  const circumference = 2 * Math.PI * 90;

  return (
    <section id="misbaha" className="py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-emerald-900 font-serif-arabic">المسبحة الإلكترونية</h2>
          <p className="text-emerald-700 text-sm mt-2">تنتقل تلقائياً بعد كل {goal} تسبيحة</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-emerald-50 transition-all">
          <div className="bg-emerald-800 p-8 text-white text-center relative">
            <div className="flex justify-between items-center mb-4">
              <button onClick={prevPhrase} className="p-2 hover:bg-white/10 rounded-full transition-colors"><ChevronRight size={20} /></button>
              <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold">الذِكر الحالي</span>
              <button onClick={nextPhrase} className="p-2 hover:bg-white/10 rounded-full transition-colors"><ChevronLeft size={20} /></button>
            </div>
            <h3 className="text-2xl font-bold font-serif-arabic min-h-[4.5rem] flex items-center justify-center">
              {TASBEEH_PHRASES[currentIndex].text}
            </h3>
          </div>

          <div className="p-10 flex flex-col items-center justify-center bg-gradient-to-b from-white to-emerald-50/20">
            <div className="relative w-64 h-64">
              <svg className="w-full h-full -rotate-90">
                <circle cx="128" cy="128" r="90" fill="transparent" stroke="#f1f5f9" strokeWidth="12" />
                <circle 
                  cx="128" cy="128" r="90" fill="transparent" 
                  stroke={isTransitioning ? "#10b981" : "#059669"} 
                  strokeWidth="12" 
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - (progress / 100) * circumference}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              </svg>

              <button 
                onClick={handleIncrement}
                disabled={isTransitioning}
                className={`absolute inset-0 m-6 rounded-full flex flex-col items-center justify-center transition-all active:scale-95 shadow-inner border-2 ${
                  isTransitioning ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-50 hover:bg-slate-50'
                }`}
              >
                {isTransitioning ? (
                  <CheckCircle2 size={60} className="text-emerald-500 animate-bounce" />
                ) : (
                  <>
                    <span className="text-7xl font-bold text-emerald-950">{count}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">سبّح</span>
                  </>
                )}
              </button>
            </div>

            <button 
              onClick={resetCount}
              className="mt-8 flex items-center gap-2 px-6 py-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 transition-all text-xs font-bold"
            >
              <RotateCcw size={14} />
              تصفير العداد
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMisbaha;
