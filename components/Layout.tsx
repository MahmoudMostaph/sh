
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-islamic-pattern text-slate-800 flex flex-col">
      <header className="bg-emerald-800 text-white py-12 px-4 shadow-lg text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif-arabic tracking-wide">في رحاب الله: شعبان بحيري</h1>
          <p className="text-emerald-100 text-xl md:text-2xl font-light">صدقة جارية لروح الفقيد الغالي</p>
          <div className="mt-8 flex justify-center gap-4">
             <div className="h-1 w-24 bg-emerald-400 rounded-full"></div>
             <div className="h-1 w-8 bg-emerald-400 rounded-full"></div>
             <div className="h-1 w-24 bg-emerald-400 rounded-full"></div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center">
        <p className="mb-2">اللهم تقبل هذا العمل خالصاً لوجهك الكريم</p>
        <p className="text-sm font-light">© {new Date().getFullYear()} - صدقة جارية لروح الفقيد شعبان بحيري</p>
      </footer>
    </div>
  );
};

export default Layout;
