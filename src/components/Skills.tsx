import { useMemo } from 'react'; // Добавляем useMemo
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Code2, Terminal, Atom, Database, 
  Layers, Cpu, Globe2, Palette 
} from 'lucide-react';

const Skills = () => {
  // Вытаскиваем language из контекста
  const { t, language } = useLanguage(); 

  // Оборачиваем в useMemo, чтобы массив пересоздавался при смене языка
  const skills = useMemo(() => [
    { name: 'HTML/CSS', icon: <Palette size={20} />, level: 'Expert' },
    { name: 'JavaScript', icon: <Terminal size={20} />, level: 'Advanced' },
    { name: 'React', icon: <Atom size={20} />, level: 'Advanced' },
    { name: 'Python', icon: <Code2 size={20} />, level: 'Intermediate' },
    { name: 'PostgreSQL', icon: <Database size={20} />, level: 'Advanced' },
    { name: 'PHP/Java', icon: <Layers size={20} />, level: 'Intermediate' },
    { name: 'Architecture', icon: <Cpu size={20} />, level: 'Advanced' },
    { name: t('skills.design'), icon: <Globe2 size={20} />, level: 'Expert' },
  ], [t, language]); // Зависимости: перевод и язык

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    },
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-glow uppercase tracking-tighter"
          >
            {t('skills.title')}
          </motion.h2>
          <div className="w-12 h-1 bg-foreground/10 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // Этот key заставляет весь блок перезапускать анимацию при смене языка
          key={language} 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto group/container"
        >
          {skills.map((skill) => (
            <motion.div
              // Уникальный ключ для каждой карточки
              key={`${skill.name}-${language}`} 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group transition-all duration-500 hover:!opacity-100 group-hover/container:opacity-40"
            >
              <div className="h-full p-6 rounded-2xl border border-border/40 bg-card/20 backdrop-blur-md flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:border-foreground/30 group-hover:bg-card/40 shadow-sm">
                
                <div className="mb-4 p-3 rounded-full bg-muted/30 text-muted-foreground group-hover:text-foreground group-hover:bg-muted/50 transition-all duration-500">
                  {skill.icon}
                </div>

                <h3 className="font-display text-sm md:text-base font-bold tracking-wide mb-1 uppercase text-foreground">
                  {skill.name}
                </h3>
                
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
                  {skill.level}
                </span>

                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-0 w-full h-px bg-foreground" />
        <div className="absolute left-1/2 top-0 w-px h-full bg-foreground" />
      </div>
    </section>
  );
};

export default Skills;