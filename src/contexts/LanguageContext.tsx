import { createContext, useContext, useState, ReactNode, useCallback, useMemo, useEffect } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.skills': 'Навыки',
    'nav.projects': 'Проекты',
    'nav.contacts': 'Контакты',

    // Hero
    'hero.role': 'Фронтенд-разработчик / UI/UX Дизайнер',
    'hero.cta': 'Мои проекты',

    // About
    'about.title': 'Обо мне',
    'about.role1': 'Фронтенд-разработчик',
    'about.role2': 'UI/UX Дизайнер',
    'about.years': '2020 - н.в.',
    'about.path.title': 'Мой путь',
    'about.path.content': 'Начал путь в веб-разработке в 2020 году, самоучкой изучая HTML и CSS. К 2022 году освоил React и начал работать над реальными проектами. Сегодня сочетаю фронтенд с бэкендом для fullstack решений.',
    'about.passion.title': 'Мои страсти',
    'about.passion.content': 'Обожаю минимализм в дизайне, неоновые эффекты и плавные анимации. Вдохновляюсь cyberpunk и нуар-эстетикой. Люблю экспериментировать с новыми фреймворками и языками программирования.',
    'about.goals.title': 'Мои цели',
    'about.goals.content': 'Стремлюсь к созданию инновационных интерфейсов, которые меняют пользовательский опыт. Цель — стать лидирующим fullstack-разработчиком в команде и внести вклад в open-source проекты.',
    'about.history': 'Моя история',
    'about.timeline.2020': 'Начал изучение веб-разработки, освоив HTML, CSS и JavaScript, заложив фундамент для будущих проектов.',
    'about.timeline.2022': 'Завершил первый крупный проект на React и начал изучение бэкенда с Node.js.',
    'about.timeline.2024': 'Погрузился в Python и базы данных, освоив PostgreSQL для создания масштабируемых приложений.',
    'about.timeline.2025': 'Стал фрилансером, расширил технологический стек до Java и PHP, работая над разнообразными проектами.',

    // Skills
    'skills.title': 'Навыки',
    'skills.design': 'UI/UX Дизайн',

    // Projects
    'projects.title': 'Проекты',
    'projects.site': 'Сайт',
    'projects.1.title': 'Cyber Landing',
    'projects.1.subtitle': 'Неоновый лендинг',
    'projects.1.description': 'Лендинг с неоновой темой, созданный с использованием vanilla JavaScript и CSS. Реализованы динамичные анимации и минималистичный дизайн.',
    'projects.2.title': 'Portfolio Hub',
    'projects.2.subtitle': 'Интерактивное портфолио',
    'projects.2.description': 'Динамическое портфолио на React и Tailwind CSS. Акцент на UX и плавные анимации для демонстрации проектов.',
    'projects.3.title': 'CRM System',
    'projects.3.subtitle': 'Веб-приложение CRM',
    'projects.3.description': 'CRM-система на Node.js и PostgreSQL. Оптимизирована для управления клиентскими данными с интуитивным интерфейсом.',
    'projects.4.title': 'E-Shop',
    'projects.4.subtitle': 'E-commerce платформа',
    'projects.4.description': 'Интернет-магазин на PHP и MySQL. Интегрированы платежные системы и адаптивный дизайн.',
    'projects.5.title': 'Mobile App',
    'projects.5.subtitle': 'Мобильное приложение',
    'projects.5.description': 'Гибридное приложение на React Native. Фокус на производительность и современный UI/UX.',
    'projects.6.title': 'Analytics Dash',
    'projects.6.subtitle': 'Дашборд аналитики',
    'projects.6.description': 'Интерактивный дашборд на Python и Django. Визуализация данных через Chart.js.',

    // Contacts
    'contacts.title': 'Мои соцсети',
    'contacts.telegram.channel': 'Telegram Канал',

    // Footer
    'footer.rights': 'Все права защищены.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contacts': 'Contacts',

    // Hero
    'hero.role': 'Frontend Developer / UI/UX Designer',
    'hero.cta': 'My Projects',

    // About
    'about.title': 'About Me',
    'about.role1': 'Frontend Developer',
    'about.role2': 'UI/UX Designer',
    'about.years': '2020 - present',
    'about.path.title': 'My Journey',
    'about.path.content': 'Started my journey in web development in 2020, self-taught HTML and CSS. By 2022, I mastered React and began working on real projects. Today I combine frontend with backend for fullstack solutions.',
    'about.passion.title': 'My Passions',
    'about.passion.content': 'I love minimalism in design, neon effects and smooth animations. Inspired by cyberpunk and noir aesthetics. I enjoy experimenting with new frameworks and programming languages.',
    'about.goals.title': 'My Goals',
    'about.goals.content': 'I strive to create innovative interfaces that transform user experience. My goal is to become a leading fullstack developer and contribute to open-source projects.',
    'about.history': 'My Story',
    'about.timeline.2020': 'Started learning web development, mastering HTML, CSS and JavaScript, laying the foundation for future projects.',
    'about.timeline.2022': 'Completed my first major React project and started learning backend with Node.js.',
    'about.timeline.2024': 'Dove into Python and databases, mastering PostgreSQL for scalable applications.',
    'about.timeline.2025': 'Became a freelancer, expanded tech stack to Java and PHP, working on diverse projects.',

    // Skills
    'skills.title': 'Skills',
    'skills.design': 'UI/UX Design',

    // Projects
    'projects.title': 'Projects',
    'projects.site': 'Website',
    'projects.1.title': 'Cyber Landing',
    'projects.1.subtitle': 'Neon Landing Page',
    'projects.1.description': 'Landing page with neon theme, created using vanilla JavaScript and CSS. Features dynamic animations and minimalist design.',
    'projects.2.title': 'Portfolio Hub',
    'projects.2.subtitle': 'Interactive Portfolio',
    'projects.2.description': 'Dynamic portfolio on React and Tailwind CSS. Focus on UX and smooth animations for project showcase.',
    'projects.3.title': 'CRM System',
    'projects.3.subtitle': 'CRM Web Application',
    'projects.3.description': 'CRM system on Node.js and PostgreSQL. Optimized for client data management with intuitive interface.',
    'projects.4.title': 'E-Shop',
    'projects.4.subtitle': 'E-commerce Platform',
    'projects.4.description': 'Online store on PHP and MySQL. Integrated payment systems and responsive design.',
    'projects.5.title': 'Mobile App',
    'projects.5.subtitle': 'Mobile Application',
    'projects.5.description': 'Hybrid application on React Native. Focus on performance and modern UI/UX.',
    'projects.6.title': 'Analytics Dash',
    'projects.6.subtitle': 'Analytics Dashboard',
    'projects.6.description': 'Interactive dashboard on Python and Django. Data visualization through Chart.js.',

    // Contacts
    'contacts.title': 'My Social Media',
    'contacts.telegram.channel': 'Telegram Channel',

    // Footer
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = useCallback((key: string): string => {
    // Выбираем словарь для текущего языка
    const currentDict = translations[language];
    // Проверяем наличие ключа, если нет — возвращаем сам ключ
    return (currentDict as any)[key] || key;
  }, [language]); // Важно: t обновляется при смене языка

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
