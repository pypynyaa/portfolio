import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Hero = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  // Функция для плавного перехода к проектам
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
      // Опционально: обновляем хеш в URL без перезагрузки
      window.history.pushState(null, '', '#/projects');
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="text-center z-10">
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? {} : { duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 text-glow-strong"
        >
          pypynya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: (shouldReduceMotion || isMobile) ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={(shouldReduceMotion || isMobile) ? { duration: 0.3 } : { duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl mb-10"
        >
          {t('hero.role')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: (shouldReduceMotion || isMobile) ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={(shouldReduceMotion || isMobile) ? { duration: 0.3 } : { duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToProjects} // Теперь клик работает через JS скролл
            className="border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 box-glow-hover px-8 py-6 text-base"
          >
            {t('hero.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;