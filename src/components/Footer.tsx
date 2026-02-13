import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Footer = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={(shouldReduceMotion || isMobile) ? { duration: 0.3 } : { duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="py-8 border-t border-border/30 relative z-10"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © 2025 pypynya. {t('footer.rights')}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
