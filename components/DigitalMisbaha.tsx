
import React, { useState, useEffect } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TASBEEH_PHRASES } from '../constants';

const DigitalMisbaha: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [showComplete, setShowComplete] = useState(false);

  const goal = TASBEEH_PHRASES[currentIndex].goal || 30;

  const handleIncrement = () => {
    const newCount = count + 1;
    
    if (newCount >= goal) {
      setCount(goal);
      setShowComplete(true);
      
      // الاهتزاز عند الاكتمال إذا كان مدعوماً
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
      }

      // الانتقال التلقائي بعد ثانية واحدة
      setTimeout(() => {
        nextPhrase();
        setShowComplete(false);
      }, 1000);
    } else {
      setCount(newCount);
      if ('vibrate' in navigator) {
        navigator.vibrate(30);
      }
    }
  };

  const resetCount = () => {
    setCount(0);
    setShowComplete(false);
  };

  const nextPhrase = () => {
    setCurrentIndex((prev) => (prev + 1) % TASBEEH_PHRASES.length);
    resetCount();
  };

  const prevPhrase = () => {
    setCurrentIndex((prev) => (prev - 1 + TASBEEH_PHRASES.length) % TASBEEH_PHRASES.length);
    resetCount();
  };

  // Progress percentage
  const progress = (count / goal) * 100;

  return (
    <section id="misbaha" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-emerald-900 font-serif-arabic">المسبحة الإلكترونية</h2>
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-100 relative">
        
        {/* Header with phrase selection */}
        <div className="bg-emerald-800 p-8 text-center text-white transition-all">
          <div className="flex justify-between items-center mb-6">
            <button onClick={prevPhrase} className="p-2 hover:bg-emerald-700 rounded-full transition-colors">
              <ChevronRight size={24} />
            </button>
            <span className="text-xs uppercase tracking-widest opacity-70">الذكر الحالي</span>
            <button onClick={nextPhrase} className="p-2 hover:bg-emerald-700 rounded-full transition-colors">
              <ChevronLeft size={24} />
            </button>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-serif-arabic min-h-[5rem] flex items-center justify-center leading-relaxed">
            {TASBEEH_PHRASES[currentIndex].text}
          </h3>
          <div className="mt-2 text-emerald-300 text-sm">الهدف: {goal} مرة</div>
        </div>
        
        {/* Main click area */}
        <div className="p-10 flex flex-col items-center relative">
          {/* Progress Ring Background */}
          <div className="relative w-56 h-56 flex items-center justify-center">
            <svg className="absolute w-full h-full -rotate-90">
              <circle
                cx="112"
                cy="112"
                r="100"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="12"
              />
              <circle
                cx="112"
                cy="112"
                r="100"
                fill="none"
                stroke={showComplete ? "#10b981" : "#059669"}
                strokeWidth="12"
                strokeDasharray="628"
                strokeDashoffset={628 - (628 * progress) / 100}
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
              />
            </svg>

            <button 
              onClick={handleIncrement}
              disabled={showComplete}
              className={`w-44 h-44 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all transform active:scale-90 z-10 ${
                showComplete ? 'bg-emerald-50 text-emerald-600' : 'bg-white shadow-lg hover:shadow-xl text-emerald-900 border border-slate-50'
              }`}
            >
              {showComplete ? (
                <CheckCircle2 size={64} className="animate-bounce" />
              ) : (
                <>
                  <span className="text-6xl font-bold tracking-tighter">
                    {count}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 uppercase">انقر للتسبيح</span>
                </>
              )}
            </button>
          </div>
          
          <div className="flex gap-4 mt-10">
            <button 
              onClick={resetCount}
              className="flex items-center gap-2 px-6 py-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 transition-colors text-sm"
            >
              <RotateCcw size={16} />
              <span>تصفير العداد</span>
            </button>
          </div>
        </div>
        
        {/* Footer info */}
        <div className="bg-slate-50 p-4 text-center text-slate-400 text-xs italic">
          تنتقل المسبحة تلقائياً للذكر التالي عند الوصول لـ 30
        </div>

        {/* Success Overlay */}
        {showComplete && (
          <div className="absolute inset-0 bg-emerald-600/10 flex items-center justify-center pointer-events-none backdrop-blur-[1px]">
            <div className="bg-white px-6 py-3 rounded-full shadow-xl text-emerald-700 font-bold animate-pulse">
              أحسنت! ننتقل للذكر التالي...
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DigitalMisbaha;
