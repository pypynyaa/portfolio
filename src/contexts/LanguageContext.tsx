import { createContext, useContext, useState, ReactNode, useCallback, useMemo, useEffect } from 'react';
import { translations, type Language } from '@/i18n/messages';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    try {
      const saved = window.localStorage.getItem('language');
      return saved === 'ru' || saved === 'en' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem('language', lang);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback((key: string): string => {
    const currentDict = translations[language];
    return currentDict[key] ?? translations.en[key] ?? key;
  }, [language]);

  useEffect(() => {
    // HTML lang
    document.documentElement.lang = t('head.lang') || language;

    // Title
    const title = t('head.title');
    if (title) document.title = title;

    // Meta helpers
    const setMetaContent = (selector: string, value: string) => {
      const el = document.querySelector<HTMLMetaElement>(selector);
      if (el) el.setAttribute('content', value);
    };

    const description = t('head.description');
    if (description) setMetaContent('meta[name="description"]', description);

    const ogTitle = t('head.ogTitle');
    if (ogTitle) setMetaContent('meta[property="og:title"]', ogTitle);

    const ogDescription = t('head.ogDescription');
    if (ogDescription) setMetaContent('meta[property="og:description"]', ogDescription);
  }, [language, t]);

  const value = useMemo(() => ({ 
    language, 
    setLanguage, 
    t 
  }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
