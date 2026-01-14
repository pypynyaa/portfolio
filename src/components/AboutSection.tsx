import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  ChevronRight,
  Zap,
  Dumbbell,
  Globe,
  Binary,
  Users,
  Tent,
  Clapperboard,
  Medal,
  Award,
  BookOpen,
} from 'lucide-react';

const AboutSection = () => {
  const [shotState, setShotState] = useState<'idle' | 'shooting' | 'made' | 'miss'>('idle');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBasketballClick = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setShotState('shooting');

    // ~45% шанс попадания
    const isMade = Math.random() > 0.55;

    setTimeout(() => {
      setShotState(isMade ? 'made' : 'miss');
    }, 900);

    setTimeout(() => {
      setShotState('idle');
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <section id="about" className="container mx-auto px-4 py-24 max-w-6xl relative overflow-hidden">
      {/* Фоновые эффекты глубины */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* ЛЕВАЯ ЧАСТЬ: ТЕРМИНАЛ */}
        <div className="lg:col-span-7 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
          <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/40 border border-rose-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/40 border border-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-500/50" />
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> root@user:~ /brain_core
            </div>
          </div>

          <div className="p-8 font-mono space-y-10">
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
                <div className="space-y-1 pl-1">
                  <p className="text-slate-200 text-xs font-bold leading-snug">
                    Программная инженерия, нейротехнологии и программирование
                  </p>
                  <p className="text-slate-500 text-[10px] italic">Status: System Online • Grade: High</p>
                </div>
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
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest">Олимпиады</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {['Math', 'Physics', 'Econ', 'Social'].map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[8px] rounded border border-emerald-500/20 uppercase font-black"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Наука & Креатив */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-widest">
                  <Binary className="w-3.5 h-3.5" /> Pure Science
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed italic border-l border-white/5 pl-4">
                  Увлечение математикой и физикой с раннего детства. Логика как фундамент.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-400 text-[10px] font-black uppercase tracking-widest">
                  <Clapperboard className="w-3.5 h-3.5" /> Creative
                </div>
                <div className="pl-0 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <span>Сценарии</span>
                    <div className="w-1 h-1 bg-rose-500 rounded-full animate-pulse" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <span>Актив ВУЗа</span>
                    <div className="w-1 h-1 bg-rose-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: ИНВЕНТАРЬ */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="px-4 mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Inventory</h2>
            </div>
            <div className="h-[1px] flex-grow ml-4 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Бокс */}
            <div className="col-span-2 bg-gradient-to-br from-rose-500/20 to-[#0A0A0A] backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] group hover:border-rose-500/40 transition-all shadow-xl flex items-center justify-between overflow-hidden relative">
              <div className="flex items-center gap-6 z-10">
                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-rose-500 text-3xl font-black italic border border-white/10 group-hover:scale-105 transition-transform">
                  10
                </div>
                <div>
                  <h3 className="font-black text-white uppercase italic tracking-tighter text-xl leading-none">Boxing</h3>
                  <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-2">10 Years</p>
                </div>
              </div>
              <div className="absolute right-[-20px] top-[-20px] w-40 h-40 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Лагерь */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.2rem] flex flex-col justify-between hover:border-indigo-500/40 transition-all group">
              <Tent className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-white font-black uppercase italic tracking-tighter text-sm">Научный лагерь</h3>
                <p className="text-slate-600 text-[9px] font-bold uppercase tracking-widest mt-1">Organizer</p>
              </div>
            </div>

            {/* Зал */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.2rem] flex flex-col justify-between hover:border-emerald-500/40 transition-all group">
              <Dumbbell className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-white font-black uppercase italic tracking-tighter text-sm">Gym / 4 Years</h3>
                <p className="text-slate-600 text-[9px] font-bold uppercase tracking-widest mt-1">Stamina +40</p>
              </div>
            </div>

            {/* Баскетбол с мини-игрой */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.2rem] flex flex-col justify-between hover:border-amber-500/40 transition-all group relative overflow-hidden h-[220px]">
                <div className="relative h-32 w-full mt-2">
                    {/* БАСКЕТБОЛЬНОЕ КОЛЬЦО (ВИД СБОКУ) */}
                    <div className="absolute top-0 right-2 flex flex-col items-end pointer-events-none">
                        {/* Щит */}
                        <div className="w-1 h-12 bg-white/20 rounded-full mr-0.5" />
                        {/* Кольцо и сетка */}
                        <div className="relative">
                            <div className="w-10 h-1.5 bg-amber-600 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)] z-20" />
                            <div className={`
                                w-8 h-10 border-x border-b border-dashed border-white/30 rounded-b-xl ml-1 
                                bg-gradient-to-b from-white/10 to-transparent origin-top
                                ${shotState === 'made' ? 'animate-[net-sway_0.5s_ease-in-out]' : ''}
                            `} />
                        </div>
                    </div>

                    {/* МЯЧИК */}
                    <button
                        onClick={handleBasketballClick}
                        disabled={isAnimating}
                        className={`
                            absolute bottom-2 left-4 text-3xl cursor-pointer transition-all select-none z-10
                            ${shotState === 'shooting' ? 'animate-[basketball-arc_0.9s_ease-out_forwards]' : ''}
                            ${shotState === 'made' ? 'animate-[basketball-arc_0.9s_ease-out_forwards] opacity-0' : ''}
                            ${shotState === 'miss' ? 'animate-[basketball-miss_0.8s_ease-in_forwards]' : ''}
                            ${shotState === 'idle' ? 'hover:scale-110 active:scale-90' : ''}
                        `}
                    >
                        🏀
                    </button>

                    {/* ВИЗУАЛЬНЫЙ ФИДБЕК */}
                    <AnimatePresence>
                        {shotState === 'made' && (
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: -40 }}
                                exit={{ opacity: 0 }}
                                className="absolute right-4 top-12 text-amber-500 font-black text-xs italic tracking-widest"
                            >
                                +3 PTS!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="z-10 bg-transparent">
                    <h3 className="text-white font-black uppercase italic tracking-tighter text-sm">Basketball</h3>
                    <p className="text-slate-600 text-[9px] font-bold uppercase tracking-widest mt-1">
                        {shotState === 'made'
                            ? 'Красавчик! Попал!'
                            : shotState === 'miss'
                            ? 'Эх, мимо...'
                            : 'Click ball to shoot'}
                    </p>
                </div>
            </div>

            {/* Путешествия */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2.2rem] flex flex-col justify-between hover:border-sky-500/40 transition-all group relative overflow-hidden h-[220px]">
                <div className="relative h-32 w-full flex items-center justify-center overflow-hidden">
                    {/* Очень лёгкий фон неба */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-8 left-10 w-12 h-6 bg-white rounded-full blur-lg" />
                    <div className="absolute bottom-10 right-12 w-10 h-5 bg-white rounded-full blur-md" />
                    </div>

                    {/* Самолётик, летает по замкнутой плавной траектории */}
                    <motion.div
                    className="text-4xl z-10 absolute"
                    animate={{
                        // Замкнутая траектория в виде слегка искажённого эллипса/волны
                        x: [0, 40, 60, 40, -20, -60, -20, 0],
                        y: [10, -30, -10, 30, 40, 40, 10, 10],
                        rotate: [-8, 10, 15, 5, -10, -15, -5, -8],
                        scale: [1, 1.05, 1.1, 1.05, 1, 1.03, 1.08, 1],
                    }}
                    transition={{
                        duration: 14,              // довольно медленно и плавно
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], // для более естественной волнообразности
                    }}
                    >
                    ✈️
                    </motion.div>
                    <motion.path
                        d="M20,70 Q50,20 80,50 Q60,80 20,70"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="3 5"
                        pathLength="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "linear"
                        }}
                    />
                </div>

                <div className="z-10">
                    <div className="flex items-center gap-2 mb-1">
                    <Globe className="w-4 h-4 text-sky-400 group-hover:rotate-180 transition-transform duration-700" />
                    <h3 className="text-white font-black uppercase italic tracking-tighter text-sm">
                        Traveling
                    </h3>
                    </div>
                    <p className="text-slate-600 text-[9px] font-bold uppercase tracking-widest italic">
                    Explorer
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;