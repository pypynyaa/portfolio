import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const change = (lang: 'ru' | 'en') => {
    // debug log to verify clicks
    // eslint-disable-next-line no-console
    console.log('Language switch click:', lang);
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-2">
        <button
          onClick={() => change('ru')}
          aria-pressed={language === 'ru'}
          className={`px-3 py-1.5 rounded text-sm font-display tracking-wider transition-all duration-300 border ${
            language === 'ru'
              ? 'bg-foreground text-background border-foreground box-glow'
              : 'bg-transparent text-foreground/70 border-foreground/30 hover:border-foreground/60 hover:text-foreground'
          }`}
        >
          RU
        </button>
        <button
          onClick={() => change('en')}
          aria-pressed={language === 'en'}
          className={`px-3 py-1.5 rounded text-sm font-display tracking-wider transition-all duration-300 border ${
            language === 'en'
              ? 'bg-foreground text-background border-foreground box-glow'
              : 'bg-transparent text-foreground/70 border-foreground/30 hover:border-foreground/60 hover:text-foreground'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
