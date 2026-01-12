import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Target, Rocket, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  const aboutCards = [
    {
      title: t('about.path.title'),
      content: t('about.path.content'),
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      title: t('about.passion.title'),
      content: t('about.passion.content'),
      icon: <Heart className="w-5 h-5" />,
    },
    {
      title: t('about.goals.title'),
      content: t('about.goals.content'),
      icon: <Target className="w-5 h-5" />,
    },
  ];

  const timeline = [
    { year: '2020', text: t('about.timeline.2020') },
    { year: '2022', text: t('about.timeline.2022') },
    { year: '2024', text: t('about.timeline.2024') },
    { year: '2025', text: t('about.timeline.2025') },
  ];

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Заголовок - четко по центру */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-glow"
          >
            {t('about.title')}
          </motion.h2>
          <div className="w-12 h-1 bg-foreground/20 mx-auto rounded-full" />
        </div>
        
        {/* Профиль - центрирование через max-w и mx-auto */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <div className="relative z-10 w-80 h-80 md:w-100 md:h-100 group">
              <div className="absolute -inset-3 border border-foreground/10 rounded-2xl group-hover:scale-105 transition-transform duration-700" />
              <div className="w-full h-full rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
                <img 
                  src="/path-to-your-photo.jpeg" 
                  alt="pypynyaa" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                /> 
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Hello, I'm pypynyaa
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight uppercase tracking-tight">
              {t('about.role1')} <br />
              <span className="text-muted-foreground font-light">{t('about.role2')}</span>
            </h3>
            <p className="text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Focused on crafting minimalist interfaces and robust digital solutions. 
              Turning complex problems into elegant, user-centric designs.
            </p>
            <div className="flex justify-center lg:justify-start gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold italic tracking-tighter">3+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t('about.years')}</span>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold italic tracking-tighter">20+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Projects</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Карточки - Серое стекло (Monochrome Glass) */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-32">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-border/50 bg-card/20 backdrop-blur-md hover:bg-card/40 hover:border-foreground/20 transition-all duration-500"
            >
              <div className="mb-6 text-muted-foreground group-hover:text-foreground transition-colors">
                {card.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-3 uppercase tracking-wider">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Таймлайн - центрированный */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold mb-16 text-center flex items-center justify-center gap-3 uppercase tracking-widest opacity-70">
            <Calendar size={18} /> {t('about.history')}
          </h3>
          
          <div className="relative border-l border-border/30 ml-4 md:ml-0 md:left-1/2">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-[-50%]' : 'md:pl-12 md:ml-0'}`}
              >
                <div className={`absolute top-1.5 -left-[5px] md:left-auto md:right-[-5px] w-2.5 h-2.5 rounded-full bg-foreground/20 border border-background z-20 ${index % 2 !== 0 ? 'md:left-[-5px]' : ''}`} />
                
                <div className="p-6 rounded-xl border border-border/30 bg-muted/5 hover:border-border/80 transition-all">
                  <span className="block mb-1 text-foreground font-bold font-display text-lg">{item.year}</span>
                  <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wide">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;