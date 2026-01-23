
import React from 'react';
import Layout from './components/Layout';
import CharityGrid from './components/CharityGrid';
import DuaSection from './components/DuaSection';
import AmeenWall from './components/AmeenWall';
import DigitalMisbaha from './components/DigitalMisbaha';
import QuranSection from './components/QuranSection';
import PropheticDuas from './components/PropheticDuas';
import { BookOpen, Share2 } from 'lucide-react';

const App: React.FC = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'صدقة جارية - شعبان بحيري',
        text: 'اللهم اغفر للمرحوم شعبان بحيري وارحمه. شاركنا الأجر في هذا الموقع التذكاري.',
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط الموقع لمشاركته');
    }
  };

  return (
    <Layout>
      {/* Introduction Card */}
      <div className="animate-fade-in bg-white rounded-3xl p-8 mb-16 shadow-xl shadow-emerald-900/5 border-t-8 border-emerald-600 text-center md:text-right flex flex-col md:flex-row items-center gap-10">
        <div className="w-28 h-28 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-inner">
          <BookOpen size={56} />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-slate-800 font-serif-arabic">صدقة جارية عن المرحوم شعبان بحيري</h2>
            <button 
              onClick={handleShare}
              className="p-3 bg-emerald-50 text-emerald-600 rounded-full hover:bg-emerald-100 transition-colors hidden md:flex"
              title="مشاركة الموقع"
            >
              <Share2 size={20} />
            </button>
          </div>
          <p className="text-slate-600 leading-[2] text-xl font-serif-arabic">
            نسألكم الدعاء بالرحمة والمغفرة لـ <strong className="text-emerald-800">المرحوم شعبان بحيري</strong>. 
            جعل الله هذا العمل في ميزان حسناته، وصدقة جارية تنفع في الآخرة، وشفيعاً له يوم القيامة. اذكروا محاسن موتاكم وادعوا لهم بظهر الغيب.
          </p>
        </div>
      </div>

      <div className="space-y-24">
        <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <QuranSection />
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <PropheticDuas />
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <DigitalMisbaha />
        </section>
        
        <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <DuaSection />
        </section>
        
        <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <CharityGrid />
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <AmeenWall />
        </section>
      </div>

      {/* Closing Section */}
      <div className="bg-emerald-900 text-white rounded-[3rem] p-12 text-center mt-24 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <BookOpen size={200} />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-8 font-serif-arabic">اللهم ارحم شعبان بحيري واغفر له</h2>
          <p className="text-emerald-100 opacity-90 max-w-3xl mx-auto leading-loose text-xl mb-10 font-serif-arabic">
            ساهم بنشر هذا الموقع بين الأهل والأصدقاء ليكون صدقة جارية مستمرة لروح المرحوم بإذن الله. 
            الدال على الخير كفاعله، ولك بمثل أجر من قرأ وسبح ودعا.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-block bg-emerald-800/80 backdrop-blur-sm border border-emerald-500/30 px-8 py-3 rounded-full text-lg font-medium">
              اذكروه دائماً بصالح الدعاء
            </div>
            <button 
              onClick={handleShare}
              className="flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-emerald-50 transition-all transform hover:scale-105"
            >
              <Share2 size={20} />
              انشر الموقع
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
