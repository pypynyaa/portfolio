import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

// Компонент одной карточки
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
      

      {/* Media Container */}
      <div className="relative aspect-video bg-[#050505] overflow-hidden group/canvas">
        <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px]" />

        <AnimatePresence>
          {!isLoaded && (
            <motion.div 
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-[#050505]"
            >
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
              <div className="relative z-20 flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 blur-md bg-white/10 animate-pulse" />
                  <Globe size={24} className="text-white relative z-10 opacity-80" />
                </div>
                <div className="text-center space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/60 block">
                    {t('projects.preview')}
                  </span>
                </div>
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

        {project.image ? (
          // ВСТАВКА КАРТИНКИ
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-1000 
              ${isLoaded ? 'opacity-40 grayscale group-hover/canvas:opacity-100 group-hover/canvas:grayscale-0 scale-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          // ОСТАВЛЯЕМ IFRAME ДЛЯ ТЕХ, ГДЕ НЕТ ФОТО
          <iframe
            src={project.link}
            className={`border-none transition-all duration-1000 origin-top-left
              ${project.isVideo ? 'w-full h-full scale-100' : 'w-[200%] h-[200%] scale-[0.5]'}
              ${isLoaded ? 'opacity-40 grayscale group-hover/canvas:opacity-100 group-hover/canvas:grayscale-0' : 'opacity-0'}
            `}
            onLoad={() => setIsLoaded(true)}
            title={project.title}
          />
        )}
        
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
          {project.links.map((link: any, i: number) => (
            <Button
              key={i}
              variant="outline"
              size="sm"
              asChild
              className="flex-1 text-[11px] border-border/40 hover:bg-foreground hover:text-background transition-all rounded-xl"
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.type === 'github' ? <Github className="w-3.5 h-3.5 mr-2" /> : <ExternalLink className="w-3.5 h-3.5 mr-2" />}
                {link.label}
              </a>
            </Button>
          ))}
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
      subtitle: t('projects.aspera.subtitle'),
      description: t('projects.aspera.description'),
      image: "./IMG_9930.JPG",
      displayUrl: 'aspera.school/preview',
      links: [
        { label: t('projects.links.frontend'), url: 'https://github.com/patewy/aspera-project', type: 'github' },
        { label: t('projects.links.backend'), url: 'https://github.com/pypynyaa/aspera', type: 'github' },
        { label: t('projects.links.docs'), url: 'https://drive.google.com/file/d/1KmEYPetPSxfUKFDy5L0AV2Dmt9sQkil-/view?usp=sharing', type: ' ' },
      ]
    },
    {
      title: "ITMOLAB",
      subtitle: t('projects.itmolab.subtitle'),
      description: t('projects.itmolab.description'),
      image: "./IMG_9918.JPG",
      link: 'https://drive.google.com/file/d/1zGxuz75YISKIbAlKVZ-rNv_NLuXO8OiJ/preview',
      links: [
        { label: t('projects.site'), url: 'https://se.ifmo.ru/courses/programming#labs', type: 'site' },
        { label: 'GitHub', url: 'https://github.com/pypynyaa/itmo.java', type: 'github' },
      ]
    },
    {
      title: "Sibyriak",
      subtitle: t('projects.sibyriak.subtitle'),
      description: t('projects.sibyriak.description'),
      link: 'https://sibyriak.ru',
      links: [
        { label: t('projects.site'), url: 'https://sibyriak.ru', type: 'site' },
        { label: 'GitHub', url: 'https://github.com/pypynyaa/sibyriak', type: 'github' },
      ]
    },
    {
      title: "Party Deanysus",
      subtitle: t('projects.party.subtitle'),
      description: t('projects.party.description'),
      link: 'https://pypynyaa.github.io/party-deanysus/',
      links: [
        { label: t('projects.site'), url: 'https://pypynyaa.github.io/party-deanysus/', type: 'site' },
        { label: 'GitHub', url: 'https://github.com/pypynyaa/party-deanysus', type: 'github' },
      ]
    },
    {
      title: "Legion Almaz",
      subtitle: t('projects.legion.subtitle'),
      description: t('projects.legion.description'),
      link: 'https://pypynyaa.github.io/LegionAlmaz/',
      links: [
        { label: t('projects.site'), url: 'https://pypynyaa.github.io/LegionAlmaz/', type: 'site' },
        { label: 'GitHub', url: 'https://github.com/pypynyaa/LegionAlmaz', type: 'github' },
      ]
    },
        {
      title: "My company site",
      subtitle: t('projects.company.subtitle'),
      description: t('projects.company.description'),
      link: 'https://pypynyaa.github.io/my_company_site/',
      links: [
        { label: t('projects.site'), url: 'https://pypynyaa.github.io/my_company_site/', type: 'site' },
        { label: 'GitHub', url: 'https://github.com/pypynyaa/my_company_site', type: 'github' },
      ]
    },
    {
      title: "Blok Lending",
      subtitle: t('projects.blok.subtitle'),
      description: t('projects.blok.description'),
      link: 'https://pypynyaa.github.io/blok-lending/',
      links: [
        { label: t('projects.site'), url: 'https://pypynyaa.github.io/blok-lending/', type: 'site' },
        { label: 'GitHub', url: 'https://github.com/pypynyaa/blok-lending', type: 'github' },
      ]
    },
    {
      title: "SpecByr",
      subtitle: t('projects.specbyr.subtitle'),
      description: t('projects.specbyr.description'),
      image: "./IMG_9932.JPG",
      link: 'http://specbyr.ru',
      links: [
        { label: t('projects.site'), url: 'http://specbyr.ru', type: 'site' },
        { label: 'GitHub', url: 'https://github.com/pypynyaa/almaz', type: 'github' },
      ]
    },
    {
      title: "ProfHub",
      subtitle: t('projects.profhub.subtitle'),
      description: t('projects.profhub.description'),
      image: "./IMG_9931.JPG",
      link: 'https://pypynyaa.github.io/LegionAlmaz/',
      links: [
        { label: 'GitHub', url: 'https://github.com/pypynyaa/ProfHub', type: 'github' },
      ]
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