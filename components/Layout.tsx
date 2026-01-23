
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-islamic-pattern text-slate-800 flex flex-col">
      <header className="bg-emerald-800 text-white py-16 px-4 shadow-xl text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1 bg-emerald-700/50 rounded-full text-sm mb-6 border border-emerald-500/30">صدقة جارية</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif-arabic tracking-wide leading-tight">في رحاب الله: شعبان بحيري</h1>
          <p className="text-emerald-100 text-xl md:text-2xl font-light opacity-90">اللهم اجعل قبره روضة من رياض الجنة</p>
          <div className="mt-10 flex justify-center gap-4">
             <div className="h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        {children}
      </main>

      <footer className="bg-emerald-950 text-emerald-500/60 py-10 px-4 text-center border-t border-emerald-900/50">
        <p className="mb-2 text-emerald-100/70 font-medium font-serif-arabic text-lg">اللهم تقبل هذا العمل خالصاً لوجهك الكريم</p>
        <p className="text-xs font-light tracking-widest">© {new Date().getFullYear()} - لروح المرحوم شعبان بحيري</p>
      </footer>
    </div>
  );
};

export default Layout;
