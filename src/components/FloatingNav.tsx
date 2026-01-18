import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Home, User, Code, FolderGit2, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  const navItems = React.useMemo(() => [
    { name: t('nav.home'), id: 'home', icon: Home },
    { name: t('nav.about'), id: 'about', icon: User },
    { name: t('nav.skills'), id: 'skills', icon: Code },
    { name: t('nav.projects'), id: 'projects', icon: FolderGit2 },
    { name: t('nav.contacts'), id: 'contacts', icon: Globe },
  ], [t, language]);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      window.history.pushState(null, '', `#/${id}`);
    }
  };

  const sidebarVariants: Variants = {
    closed: { x: '-100%' },
    opened: { x: 0 }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]"
          />
        )}

        {(isVisible || isOpen) && (
          <motion.nav
            variants={sidebarVariants}
            initial="closed"
            animate={isOpen ? "opened" : "closed"}
            exit="closed"
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            className="fixed left-0 top-0 bottom-0 w-[280px] bg-background/90 backdrop-blur-2xl border-r border-white/10 z-[90] flex flex-col shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-24 bg-background/90 backdrop-blur-2xl border-y border-r border-white/10 rounded-r-2xl flex items-center justify-center text-foreground hover:text-primary transition-colors shadow-[5px_0_15px_rgba(0,0,0,0.1)] outline-none"
            >
              <motion.div animate={{ rotate: isOpen ? 0 : 180 }} transition={{ duration: 0.3 }}>
                <ChevronLeft size={24} />
              </motion.div>
            </button>

            <div className="flex-1 py-12 px-6 overflow-y-auto">
              <div className="mb-10 ml-4">
                <h2 className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-bold opacity-50">Navigate</h2>
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all duration-300 text-left w-full"
                    >
                      <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="font-medium text-sm tracking-wide flex-1">{item.name}</span>
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6 border-t border-white/5 bg-muted/10">
              <div className="flex items-center gap-3 ml-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest">Live Status</span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingNav;