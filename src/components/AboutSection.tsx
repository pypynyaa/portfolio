import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  ChevronRight,
  Dumbbell,
  Globe,
  Binary,
  BookOpen,
  Medal,
  Award,
  Tent,
  Clapperboard,
  Trophy
} from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-24 max-w-6xl relative overflow-hidden">
      {/* Фоновые эффекты глубины */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-stretch">
        
        {/* ЛЕВАЯ ЧАСТЬ: ТЕРМИНАЛ */}
        <div className="lg:col-span-7 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
          <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/40 border border-rose-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/40 border border-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-500/50" />
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> nigmatcanov@MacBook-Pro-Nikita-4:~ /brain_core
            </div>
          </div>

          <div className="p-8 font-mono space-y-10 flex-grow">
            {/* ITMO */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-indigo-400">
                <ChevronRight className="w-4 h-4" />
                <span className="font-black uppercase tracking-widest text-xs italic">fetch university_status</span>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-[2rem] border border-white/10 relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                <div className="absolute right-6 top-6 text-indigo-500/10 font-black italic text-4xl select-none group-hover:text-indigo-500/20 transition-colors">
                  ITMO
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-500/20">
                    <BookOpen className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-tight">Университет ИТМО</h4>
                    <p className="text-indigo-400 text-[9px] font-bold uppercase tracking-[0.2em]">2 курс бакалавриата</p>
                  </div>
                </div>
                <p className="text-slate-200 text-xs font-bold leading-snug pl-1">
                  Программная инженерия; Нейротехнологии и программирование.
                </p>
              </div>
            </div>

            {/* Достижения */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <ChevronRight className="w-4 h-4" />
                <span className="font-black uppercase tracking-widest text-xs italic">cat accomplishments.log</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 border-l border-white/10 font-sans">
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5 flex items-center gap-3">
                  <Medal className="w-4 h-4 text-amber-500" />
                  <span className="text-slate-300 text-[10px] font-bold leading-tight">Серебряная медаль</span>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5 flex items-center gap-3">
                   <Award className="w-4 h-4 text-emerald-500" />
                   <span className="text-slate-300 text-[10px] font-bold leading-tight">Призер Олимпиад по Математике, Физике, Экономике и Обществознанию.</span>
                </div>
              </div>
            </div>

            {/* Наука & Креатив */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest">
                  <Binary className="w-3.5 h-3.5" /> Pure Science
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed italic border-l border-white/5 pl-0">
                  Увлечение математикой и физикой с 4-х лет.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-400 text-[10px] font-black uppercase tracking-widest">
                  <Clapperboard className="w-3.5 h-3.5" /> Creative
                </div>
                <div className="flex flex-wrap gap-2 pl-0">
                   <span className="text-[10px] text-slate-300 bg-white/5 px-2 py-1 rounded-md border border-white/5">Сценарии</span>
                   <span className="text-[10px] text-slate-300 bg-white/5 px-2 py-1 rounded-md border border-white/5">Актив ВУЗа</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: ИНВЕНТАРЬ */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div className="px-4 mb-4 flex items-center justify-between">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Inventory</h2>
            <div className="h-[1px] flex-grow ml-4 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-4 flex-grow">
            {/* Бокс (Акцентная карточка) */}
            <div className="col-span-2 bg-gradient-to-br from-rose-500/20 to-[#0A0A0A] backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] group hover:border-rose-500/40 transition-all shadow-xl flex items-center justify-between overflow-hidden relative min-h-[140px]">
              <div className="flex items-center gap-6 z-10">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-rose-500 text-3xl font-black italic border border-white/10 group-hover:scale-105 transition-transform">
                  10
                </div>
                <div>
                  <h3 className="font-black text-white uppercase italic tracking-tighter text-2xl leading-none">Бокс</h3>
                  <p className="text-slate-500 text-[11px] uppercase font-bold tracking-widest mt-2">10 лет опыта</p>
                </div>
              </div>
            </div>

            {/* Научный лагерь */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.2rem] flex flex-col justify-between hover:border-indigo-500/40 transition-all group min-h-[180px]">
              <Tent className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-white font-black uppercase italic tracking-tighter text-lg">Научный лагерь</h3>
                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-1">Организатор</p>
              </div>
            </div>

            {/* Зал */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.2rem] flex flex-col justify-between hover:border-emerald-500/40 transition-all group min-h-[180px]">
              <Dumbbell className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-white font-black uppercase italic tracking-tighter text-lg">Пауэрлифтинг</h3>
                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-1">4 года</p>
              </div>
            </div>

            {/* Баскетбол */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.2rem] flex flex-col justify-between hover:border-amber-500/40 transition-all group min-h-[180px]">
              <Trophy className="w-6 h-6 text-amber-500 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-white font-black uppercase italic tracking-tighter text-lg">Баскетбол</h3>
                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-1">Игрок</p>
              </div>
            </div>

            {/* Путешествия */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.2rem] flex flex-col justify-between hover:border-sky-500/40 transition-all group min-h-[180px]">
              <Globe className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-white font-black uppercase italic tracking-tighter text-lg">Путешествия</h3>
                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-1">Исследователь</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;