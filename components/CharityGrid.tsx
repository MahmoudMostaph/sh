
import React from 'react';
import { Droplets, BookOpen, TreePalm, Heart } from 'lucide-react';
import { PROJECTS } from '../constants';

const IconMap: Record<string, any> = {
  Droplets,
  BookOpen,
  TreePalm,
  Heart
};

const CharityGrid: React.FC = () => {
  return (
    <section id="charity" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-emerald-900 font-serif-arabic">أبواب الخير (صدقة جارية)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROJECTS.map((project) => {
          const Icon = IconMap[project.icon];
          return (
            <div key={project.id} className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-50 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CharityGrid;
