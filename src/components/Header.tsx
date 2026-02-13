import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const navItems = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.skills'), id: 'skills' },
    { name: t('nav.projects'), id: 'projects' },
    { name: t('nav.contacts'), id: 'contacts' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
      setIsOpen(false);
      window.history.pushState(null, '', `#/${id}`);
    }
  };

  const sidebarVariants: Variants = shouldReduceMotion ? {
    closed: { x: '100%', transition: { duration: 0.2 } },
    opened: { x: 0, transition: { duration: 0.2 } },
  } : {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 400, damping: 40 } },
    opened: { x: 0, transition: { type: 'spring', stiffness: 400, damping: 40 } },
  };

  const linkVariants: Variants = shouldReduceMotion ? {
    closed: { opacity: 1 },
    opened: { opacity: 1 },
  } : {
    closed: { opacity: 0, x: 20 },
    opened: (i: number) => ({
      opacity: 1, x: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <motion.header
      initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={shouldReduceMotion ? {} : { duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection('home')} className="font-display text-xl font-bold tracking-wider text-glow z-[60]">
          PYPYNYA
        </button>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        <div className="flex md:hidden items-center gap-4 z-[60]">
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2 outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] md:hidden"
            />
            <motion.div
              variants={sidebarVariants} initial="closed" animate="opened" exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-background border-l border-border/50 z-[55] shadow-[-10px_0_30px_rgba(0,0,0,0.3)] md:hidden flex flex-col"
            >
              <div className="pt-32 px-10 flex flex-col gap-8">
                {navItems.map((item, i) => (
                  <motion.div key={item.id} custom={i} variants={linkVariants}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="group flex items-center justify-between text-2xl font-display font-medium text-muted-foreground hover:text-foreground transition-all w-full"
                    >
                      <span>{item.name}</span>
                      <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;