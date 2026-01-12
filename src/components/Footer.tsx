import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
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
