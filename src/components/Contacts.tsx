import { motion } from 'framer-motion';
import { Send, Instagram, Github, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Contacts = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const contacts = [
    { 
      name: 'Telegram', 
      icon: Send, 
      href: 'https://t.me/pypynyaa',
      color: 'from-blue-400 to-blue-600',
      description: '@pypynyaa'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com/nigmatchanovn',
      color: 'from-pink-500 via-purple-500 to-orange-400',
      description: '@nigmatchanovn'
    },
    { 
      name: t('contacts.telegram.channel'), 
      icon: MessageCircle, 
      href: 'https://t.me/two_nn',
      color: 'from-cyan-400 to-blue-500',
      description: '@two_nn'
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/pypynyaa',
      color: 'from-gray-400 to-gray-600',
      description: 'pypynyaa'
    },
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      href: 'https://wa.me/+79776863050',
      color: 'from-green-400 to-green-600',
      description: '+7 977 686 30 50'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:nikita662006@bk.ru',
      color: 'from-red-400 to-orange-500',
      description: 'nikita662006@bk.ru'
    },
  ];

  return (
    <section id="contacts" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: (shouldReduceMotion || isMobile) ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={(shouldReduceMotion || isMobile) ? { duration: 0.3 } : { duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-glow">
            {t('contacts.title')}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            {t('contacts.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: (shouldReduceMotion || isMobile) ? 0 : 30, rotateX: (shouldReduceMotion || isMobile) ? 0 : -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={(shouldReduceMotion || isMobile) ? { duration: 0.3 } : { duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={(shouldReduceMotion || isMobile) ? {} : { scale: 1.02, y: -5 }}
              whileTap={(shouldReduceMotion || isMobile) ? {} : { scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl bg-secondary/70 backdrop-blur-md border border-border/30 p-6 transition-all duration-500"
            >
              {/* Gradient background on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} 
              />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${contact.color} p-[1px]`}>
                  <div className="h-full w-full rounded-2xl bg-background/90" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-start gap-4">
                {/* Icon container */}
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} p-[1px] group-hover:shadow-lg group-hover:shadow-white/10 transition-shadow duration-500`}>
                  <div className="w-full h-full rounded-xl bg-background/80 flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
                    <contact.icon className="w-6 h-6 text-foreground group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-foreground group-hover:text-glow transition-all duration-300">
                      {contact.name}
                    </h3>
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 truncate">
                    {contact.description}
                  </p>
                </div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
