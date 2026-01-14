import { motion } from 'framer-motion';
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
      <div className="relative aspect-video bg-black/20 overflow-hidden">
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-background/90 z-10 transition-opacity duration-700 
          ${isLoaded ? 'group-hover:opacity-0 group-hover:pointer-events-none' : 'opacity-100'}`}>
           <span className="font-display text-[9px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
             {t('projects.preview') || 'Live Preview'}
           </span>
           <Loader2 className="animate-spin text-muted-foreground/20" size={20} />
        </div>

        <iframe
          src={project.link}
          className="w-[200%] h-[200%] origin-top-left border-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ 
            transform: 'scale(0.5)',
          }}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          title={project.title}
        />
        
        <div className="absolute inset-0 z-20 pointer-events-auto group-hover:pointer-events-none" />
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
      description: "Специализированный сайт для услуг алмазного бурения с четкой структурой и формами захвата.",
      link: 'https://pypynyaa.github.io/LegionAlmaz/',
      github: 'https://github.com/pypynyaa/LegionAlmaz'
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
      title: "Company Site",
      subtitle: "Corporate Portal",
      description: "Корпоративное решение для представления бизнес-услуг.",
      link: 'https://pypynyaa.github.io/my_company_site/',
      github: 'https://github.com/pypynyaa/my_company_site'
    },
    {
      title: "SpecByr",
      subtitle: "Engineering",
      description: "Инженерно-проектировочный портал с техническим уклоном.",
      link: 'http://specbyr.ru',
      github: '#'
    }
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