export type Language = 'ru' | 'en';

export const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Head / SEO
    'head.lang': 'ru',
    'head.title': 'pypynya — Фронтенд-разработчик & UI/UX Дизайнер',
    'head.description': 'Портфолио фронтенд-разработчика и UI/UX дизайнера. React, JavaScript, современные веб-технологии.',
    'head.ogTitle': 'pypynya — Фронтенд-разработчик',
    'head.ogDescription': 'Портфолио фронтенд-разработчика и UI/UX дизайнера',

    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.skills': 'Навыки',
    'nav.projects': 'Проекты',
    'nav.contacts': 'Контакты',

    // Floating nav
    'floatingNav.navigate': 'Навигация',
    'floatingNav.liveStatus': 'Статус',

    // Hero
    'hero.role': 'Fullstack Разработчик',
    'hero.cta': 'Мои проекты',

    // About
    'about.title': 'Обо мне',
    'about.greeting': 'Привет, я Никита Нигматчанов',
    'about.role1': 'Разработчик',
    'about.role2': 'Full Stack',
    'about.years': '2023 - н.в.',
    'about.projectsLabel': 'Проекты',
    'about.location': 'В данный момент проживаю в Санкт-Петербурге, Россия. Увлекаюсь созданием современных веб-приложений с акцентом на производительность и пользовательский опыт.',
    'about.path.title': 'Мой путь',
    'about.path.content': 'Начал путь в веб-разработке в 2023 году, самоучкой изучая HTML и CSS. К 2025 году освоил React и начал работать над реальными проектами. Сегодня сочетаю фронтенд с бэкендом для fullstack решений.',
    'about.passion.title': 'Мои страсти',
    'about.passion.content': 'Люблю минимализм в дизайне, неоновые эффекты и плавные анимации. Вдохновляюсь cyberpunk и нуар-эстетикой. Люблю экспериментировать с новыми фреймворками и языками программирования.',
    'about.goals.title': 'Мои цели',
    'about.goals.content': 'Стремлюсь к созданию инновационных интерфейсов для образования. Цель — разработать интуитивно понятный и приятный интерфейс, который будет понятен даже детям.',
    'about.timeline.2023': 'Начал изучение веб-разработки, освоив HTML, CSS и JavaScript, заложив фундамент для будущих проектов.',
    'about.timeline.2024': 'Начал первый крупный проект на React, погрузился в Python и базы данных, освоив PostgreSQL для создания масштабируемых приложений.',
    'about.timeline.2025': 'Стал фрилансером, расширил технологический стек до Java и PHP, работая над разнообразными проектами.',
    'about.history': 'Моя история',

    // About section (terminal + inventory)
    'aboutSection.fetchUniversityStatus': 'fetch university_status',
    'aboutSection.university.name': 'Университет ИТМО',
    'aboutSection.university.status': '2 курс бакалавриата',
    'aboutSection.university.program': 'Программная инженерия; Нейротехнологии и программирование.',

    'aboutSection.accomplishmentsCommand': 'cat accomplishments.log',
    'aboutSection.accomplishments.silverMedal': 'Серебряная медаль',
    'aboutSection.accomplishments.olympiadWinner': 'Призер Олимпиад по Математике, Физике, Экономике и Обществознанию.',

    'aboutSection.science.title': 'Чистая наука',
    'aboutSection.science.text': 'Увлечение математикой и физикой с 4-х лет.',
    'aboutSection.creative.title': 'Творчество',
    'aboutSection.creative.tag1': 'Сценарии',
    'aboutSection.creative.tag2': 'Актив ВУЗа',

    'aboutSection.inventory.title': 'Инвентарь',
    'aboutSection.inventory.boxing.title': 'Бокс',
    'aboutSection.inventory.boxing.subtitle': '10+ лет опыта',
    'aboutSection.inventory.scienceCamp.title': 'Научный лагерь',
    'aboutSection.inventory.scienceCamp.subtitle': 'Организатор',
    'aboutSection.inventory.powerlifting.title': 'Зал',
    'aboutSection.inventory.powerlifting.subtitle': '3 года',
    'aboutSection.inventory.basketball.title': 'Баскетбол',
    'aboutSection.inventory.basketball.subtitle': 'Игрок',
    'aboutSection.inventory.travel.title': 'Путешествия',
    'aboutSection.inventory.travel.subtitle': 'Активный путешественник',

    // Skills
    'skills.title': 'Навыки',
    'skills.design': 'UI/UX Дизайн',

    // Projects
    'projects.title': 'Проекты',
    'projects.site': 'Сайт',
    'projects.preview': 'Инициализация потока',
    'projects.links.frontend': 'Фронтенд',
    'projects.links.backend': 'Бэкенд',
    'projects.links.docs': 'Документация',
    'projects.links.visit': 'Перейти',

    'projects.aspera.subtitle': 'Школьная экосистема в вебе',
    'projects.aspera.description': 'Экосистема для школ — в разработке. Современный интерфейс для образовательных учреждений.',
    'projects.itmolab.subtitle': 'Лабораторные работы университета',
    'projects.itmolab.description': 'Лабораторные работы университета ИТМО. Заполняется.',
    'projects.sibyriak.subtitle': 'E-commerce',
    'projects.sibyriak.description': 'Сайт растущей базы отдыха в Сибири. Интуитивный интерфейс для бронирования и информации.',
    'projects.party.subtitle': 'Лендинг мероприятий',
    'projects.party.description': 'Яркий и динамичный промо-сайт для мероприятий.',
    'projects.legion.subtitle': 'Промышленный лендинг',
    'projects.legion.description': 'Специализированный сайт для услуг алмазного бурения.',
    'projects.company.subtitle': 'Корпоративный сайт',
    'projects.company.description': 'Сайт для хранения воспоминаний компании с современным дизайном.',
    'projects.blok.subtitle': 'Современный лендинг',
    'projects.blok.description': 'Минималистичный лендинг с акцентом на типографику.',
    'projects.specbyr.subtitle': 'Инжиниринг',
    'projects.specbyr.description': 'Специализированный сайт для услуг алмазного бурения.',
    'projects.profhub.subtitle': 'Хаб для профтестирования',
    'projects.profhub.description': 'Специализированный хаб для проверки профпригодности.',

    // Contacts
    'contacts.title': 'Мои соцсети',
    'contacts.subtitle': 'Свяжитесь со мной любым удобным способом',

    // Footer
    'footer.rights': 'Все права защищены.',

    // Not found
    'notFound.message': 'Упс! Страница не найдена',
    'notFound.back': 'Вернуться на главную',
  },

  en: {
    // Head / SEO
    'head.lang': 'en',
    'head.title': 'pypynya — Frontend Developer & UI/UX Designer',
    'head.description': 'Frontend developer and UI/UX designer portfolio. React, JavaScript, modern web technologies.',
    'head.ogTitle': 'pypynya — Frontend Developer',
    'head.ogDescription': 'Frontend developer and UI/UX designer portfolio',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contacts': 'Contacts',

    // Floating nav
    'floatingNav.navigate': 'Navigate',
    'floatingNav.liveStatus': 'Live Status',

    // Hero
    'hero.role': 'Fullstack Developer',
    'hero.cta': 'My Projects',

    // About
    'about.title': 'About Me',
    'about.greeting': "Hello, I'm Nikita Nigmatchanov",
    'about.role1': 'Developer',
    'about.role2': 'Full Stack',
    'about.years': '2023 - present',
    'about.projectsLabel': 'Projects',
    'about.location': 'Currently based in Saint Petersburg, Russia. I enjoy building modern web apps with a focus on performance and user experience.',
    'about.path.title': 'My Journey',
    'about.path.content': 'Started my web development journey in 2023, self-learning HTML and CSS. By 2025, I mastered React and began working on real projects. Today, I combine frontend and backend skills for fullstack solutions.',
    'about.passion.title': 'My Passions',
    'about.passion.content': 'I love minimalism in design, neon effects, and smooth animations. Inspired by cyberpunk and noir aesthetics. I enjoy experimenting with new frameworks and programming languages.',
    'about.goals.title': 'My Goals',
    'about.goals.content': 'I aim to create innovative interfaces for education. My goal is to develop an intuitive and enjoyable interface that is easy to understand, even for children.',
    'about.history': 'My Story',
    'about.timeline.2023': 'Began learning web development, mastering HTML, CSS, and JavaScript, laying the foundation for future projects.',
    'about.timeline.2024': 'Started my first major project in React, delved into Python and databases, mastering PostgreSQL for building scalable applications.',
    'about.timeline.2025': 'Became a freelancer, expanded my tech stack to Java and PHP, working on diverse projects.',

    // About section (terminal + inventory)
    'aboutSection.fetchUniversityStatus': 'fetch university_status',
    'aboutSection.university.name': 'ITMO University',
    'aboutSection.university.status': "Bachelor's degree — 2nd year",
    'aboutSection.university.program': 'Software Engineering; Neurotechnology and Programming.',

    'aboutSection.accomplishmentsCommand': 'cat accomplishments.log',
    'aboutSection.accomplishments.silverMedal': 'Silver medal',
    'aboutSection.accomplishments.olympiadWinner': 'Olympiad prize-winner in Mathematics, Physics, Economics, and Social Studies.',

    'aboutSection.science.title': 'Pure Science',
    'aboutSection.science.text': 'Interested in mathematics and physics since the age of 4.',
    'aboutSection.creative.title': 'Creative',
    'aboutSection.creative.tag1': 'Scripts',
    'aboutSection.creative.tag2': 'University community',

    'aboutSection.inventory.title': 'Inventory',
    'aboutSection.inventory.boxing.title': 'Boxing',
    'aboutSection.inventory.boxing.subtitle': '10 years of experience',
    'aboutSection.inventory.scienceCamp.title': 'Science camp',
    'aboutSection.inventory.scienceCamp.subtitle': 'Organizer',
    'aboutSection.inventory.powerlifting.title': 'GYM',
    'aboutSection.inventory.powerlifting.subtitle': '3 years',
    'aboutSection.inventory.basketball.title': 'Basketball',
    'aboutSection.inventory.basketball.subtitle': 'Player',
    'aboutSection.inventory.travel.title': 'Travel',
    'aboutSection.inventory.travel.subtitle': 'Active Travaler',

    // Skills
    'skills.title': 'Skills',
    'skills.design': 'UI/UX Design',

    // Projects
    'projects.title': 'Projects',
    'projects.site': 'Website',
    'projects.preview': 'Initializing Stream',
    'projects.links.frontend': 'Frontend',
    'projects.links.backend': 'Backend',
    'projects.links.docs': 'Docs',
    'projects.links.visit': 'Visit',

    'projects.aspera.subtitle': 'Web-based School Ecosystem',
    'projects.aspera.description': 'School ecosystem in development. A modern interface for educational institutions.',
    'projects.itmolab.subtitle': 'University Lab Works',
    'projects.itmolab.description': 'ITMO University lab works. In progress.',
    'projects.sibyriak.subtitle': 'E-commerce',
    'projects.sibyriak.description': 'Website for a growing resort base in Siberia. An intuitive interface for booking and information.',
    'projects.party.subtitle': 'Event Landing',
    'projects.party.description': 'A bright and dynamic promo website for events.',
    'projects.legion.subtitle': 'Industrial Landing',
    'projects.legion.description': 'Specialized website for diamond drilling services.',
    'projects.company.subtitle': 'Corporate Website',
    'projects.company.description': 'A website to preserve company memories with a modern design.',
    'projects.blok.subtitle': 'Modern Landing Page',
    'projects.blok.description': 'A minimalist landing page with an emphasis on typography.',
    'projects.specbyr.subtitle': 'Engineering',
    'projects.specbyr.description': 'Specialized website for diamond drilling services.',
    'projects.profhub.subtitle': 'Professional Testing Hub',
    'projects.profhub.description': 'A specialized hub for professional aptitude testing.',

    // Contacts
    'contacts.title': 'My Social Media',
    'contacts.subtitle': 'Contact me in any convenient way',
    'contacts.telegram.channel': 'Telegram Channel',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Not found
    'notFound.message': 'Oops! Page not found',
    'notFound.back': 'Return to Home',
  },
};

