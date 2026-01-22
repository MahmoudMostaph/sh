
import React from 'react';
import Layout from './components/Layout';
import CharityGrid from './components/CharityGrid';
import DuaSection from './components/DuaSection';
import AmeenWall from './components/AmeenWall';
import DigitalMisbaha from './components/DigitalMisbaha';
import QuranSection from './components/QuranSection';
import PropheticDuas from './components/PropheticDuas';
import { BookOpen } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Introduction Card */}
      <div className="bg-white rounded-2xl p-8 mb-16 shadow-sm border-t-4 border-emerald-600 text-center md:text-right flex flex-col md:flex-row items-center gap-8">
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
          <BookOpen size={48} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">صدقة جارية عن المرحوم شعبان بحيري</h2>
          <p className="text-slate-600 leading-loose text-lg font-serif-arabic">
            نسألكم الدعاء بالرحمة والمغفرة لفقيدنا الغالي <strong>شعبان بحيري</strong>. 
            جعل الله هذا العمل في ميزان حسناته، وصدقة جارية تنفع في الآخرة، وشفيعاً له يوم القيامة.
          </p>
        </div>
      </div>

      {/* Main Sections */}
      <QuranSection />

      <PropheticDuas />

      <DigitalMisbaha />
      
      <DuaSection />
      
      <CharityGrid />

      <AmeenWall />

      {/* Closing Section */}
      <div className="bg-emerald-900 text-white rounded-3xl p-10 text-center mt-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <BookOpen size={120} />
        </div>
        <h2 className="text-3xl font-bold mb-6 font-serif-arabic">اللهم ارحم شعبان بحيري واغفر له</h2>
        <p className="text-emerald-100 opacity-90 max-w-2xl mx-auto leading-relaxed text-lg mb-8">
          ساهم بنشر هذا الموقع بين الأهل والأصدقاء ليكون صدقة جارية مستمرة لروح الفقيد. 
          الدال على الخير كفاعله، ولك بمثل أجر من قرأ وسبح.
        </p>
        <div className="inline-block bg-emerald-800 px-6 py-2 rounded-full text-sm font-light">
          اذكروه دائماً بصالح الدعاء
        </div>
      </div>
    </Layout>
  );
};

export default App;
