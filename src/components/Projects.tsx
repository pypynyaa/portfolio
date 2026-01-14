import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Loader2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card/20 backdrop-blur-md border border-border/40 rounded-2xl overflow-hidden hover:border-foreground/30 transition-all duration-500 flex flex-col h-full shadow-2xl"
    >
      {/* Browser Frame Header */}
      <div className="bg-muted/30 border-b border-border/40 px-4 py-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-border/60" />
          <div className="w-2 h-2 rounded-full bg-border/60" />
          <div className="w-2 h-2 rounded-full bg-border/60" />
        </div>
        <div className="flex items-center gap-2 bg-background/40 px-3 py-0.5 rounded border border-border/20">
          <Globe size={10} className="text-muted-foreground" />
          <span className="text-[9px] text-muted-foreground truncate max-w-[150px]">
            {project.link.replace('https://', '').replace('http://', '')}
          </span>
        </div>
        <div className="w-8" />
      </div>

      {/* Live Site Container */}
      {/* Live Site Container - SYSTEM INITIALIZATION STYLE */}
      <div className="relative aspect-video bg-[#050505] overflow-hidden group/canvas">
        
        {/* Эффект сетки (Grid) всегда на фоне */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px]" />

        <AnimatePresence>
          {!isLoaded && (
            <motion.div 
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-[#050505]"
            >
              {/* Анимированный сканер (бегущая полоса) */}
              <motion.div 
                className="absolute inset-0 z-10 pointer-events-none"
                initial={{ top: "-100%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ 
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)',
                  height: '20%' 
                }}
              />

              {/* Центральный блок загрузки */}
              <div className="relative z-20 flex flex-col items-center">
                {/* Иконка "Система" */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 blur-md bg-white/10 animate-pulse" />
                  <Globe size={24} className="text-white relative z-10 opacity-80" />
                </div>

                {/* Текстовые данные */}
                <div className="text-center space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/60 block">
                    {t('projects.preview') || 'Initializing Link'}
                  </span>
                  
                  {/* Имитация загрузки байтов */}
                  <div className="font-mono text-[8px] text-white/20 uppercase flex gap-4 mt-2">
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      ADDR: 0x{Math.random().toString(16).slice(2, 6).toUpperCase()}
                    </motion.span>
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}>
                      STATUS: STREAMING
                    </motion.span>
                  </div>
                </div>

                {/* Технологичный прогресс-бар */}
                <div className="w-32 h-[2px] bg-white/5 mt-6 relative overflow-hidden rounded-full">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-white/40"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Сам Iframe (появляется после загрузки) */}
        <iframe
          src={project.link}
          className={`w-[200%] h-[200%] origin-top-left border-none transition-all duration-1000 
            ${isLoaded ? 'opacity-40 grayscale group-hover/canvas:opacity-100 group-hover/canvas:grayscale-0 group-hover/canvas:scale-[0.52]' : 'opacity-0'}`}
          style={{ transform: 'scale(0.5)' }}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          title={project.title}
        />
        
        {/* Слой блокировки кликов внутри фрейма, пока не навели */}
        <div className="absolute inset-0 z-40 pointer-events-auto group-hover/canvas:pointer-events-none" />
      </div>
      
      {/* Project Info */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="font-display text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-1">
            {project.subtitle}
          </h3>
          <h2 className="text-lg font-bold tracking-tight">{project.title}</h2>
        </div>

        <p className="text-xs text-muted-foreground/70 mb-6 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex gap-2 mt-auto">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 text-[11px] border-border/40 hover:bg-foreground hover:text-background transition-all rounded-xl"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5 mr-2" />
              {t('projects.site') || 'Visit'}
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 text-[11px] border-border/40 hover:bg-foreground hover:text-background transition-all rounded-xl"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Aspera",
      subtitle: "Industrial Landing",
      description: "Экосистема для школ - в разработке. Современный интерфейс для образовательных учреждений.",
      link: 'https://github.com/patewy/aspera-project',
      github: 'https://github.com/pypynyaa/aspera'
    },
    {
      title: "ITMOLAB",
      subtitle: "Industrial Landing",
      description: "Лабораторные работы университета ИТМО. Заполняется.",
      link: 'https://se.ifmo.ru/courses/programming#labs',
      github: 'https://github.com/pypynyaa/itmo.java'
    },
    {
      title: "Sibyriak",
      subtitle: "E-commerce",
      description: "Интернет-магазин сибирской одежды. Глубокая проработка UI и UX.",
      link: 'https://sibyriak.ru',
      github: '#'
    },
    {
      title: "Party Deanysus",
      subtitle: "Event Landing",
      description: "Яркий и динамичный промо-сайт для мероприятий.",
      link: 'https://pypynyaa.github.io/party-deanysus/',
      github: 'https://github.com/pypynyaa/party-deanysus'
    },
    {
      title: "Legion Almaz",
      subtitle: "Industrial Landing",
      description: "Специализированный сайт для услуг алмазного бурения с четкой структурой и формами захвата.",
      link: 'https://pypynyaa.github.io/LegionAlmaz/',
      github: 'https://github.com/pypynyaa/LegionAlmaz'
    },
    {
      title: "Blok Lending",
      subtitle: "Modern Landing Page",
      description: "Минималистичный лендинг с акцентом на типографику и чистоту интерфейса.",
      link: 'https://pypynyaa.github.io/blok-lending/',
      github: 'https://github.com/pypynyaa/blok-lending'
    },
    {
      title: "My company site",
      subtitle: "Corporate Portal",
      description: "Сайт для хранения воспоминаний компании с современным дизайном и удобной навигацией.",
      link: 'https://pypynyaa.github.io/my_company_site/',
      github: 'https://github.com/pypynyaa/my_company_site'
    },
    {
      title: "SpecByr",
      subtitle: "Engineering",
      description: "Инженерно-проектировочный портал с техническим уклоном.",
      link: 'http://specbyr.ru',
      github: 'https://github.com/pypynyaa/almaz'
    },
    {
      title: "ProfHub",
      subtitle: "Industrial Landing",
      description: "Специализированный сайт для услуг алмазного бурения с четкой структурой и формами захвата.",
      link: 'https://pypynyaa.github.io/LegionAlmaz/',
      github: 'https://github.com/pypynyaa/ProfHub'
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tighter uppercase"
          >
            {t('projects.title')}
          </motion.h2>
          <div className="w-12 h-1 bg-foreground/10 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;