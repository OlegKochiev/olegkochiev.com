const THEME = {
  DARK: {
    mode: 'dark',
    backgroundColor: '#202627',
    color: '#ddd',
    lineColor: '#404040',
    blueColor: '#078080',
  },
  LIGHT: {
    mode: 'light',
    backgroundColor: '#fafcff',
    color: '#000',
    lineColor: '#a0a0a0',
    blueColor: '#078080',
  },
  GOLD: {
    mode: 'gold',
    backgroundColor: '#111113',
    color: '#9c846b',
    lightShade: '#ece9e6',

    darkShade: '#a37b54',
    lineColor: '#353438',
    blueColor: '#078080',
  },
};

const PAGES = {
  HOME: {
    title: 'Главная',
    path: () => '/',
  },
  PORTFOLIO: {
    title: 'Портфолио',
    path: () => '/portfolio',
    byName: (name: string) => `/portfolio/${name}`,
    byTag: (tag: string) => `/portfolio/tag/${tag}`,
  },
  EDUCATION: {
    title: 'Образование',
    path: () => '/education',
  },
  ABOUT_ME: {
    title: 'Обо мне',
    path: () => '/about-me',
  },
  ADMIN: {
    title: 'Панель администратора',
    path: () => '/admin',
    ABOUT_LIFE: {
      title: 'О жизни',
      path: () => `/admin/about-life`,
      byLifeItem: (item: string, subitem: string) => `/admin/about-life/${item}/${subitem}`,
    },
  },
  LOGIN: {
    title: 'Войти',
    path: () => '/signin',
  },
};

const ERRORS = {
  FIELD: {
    IS_REQUIRED: 'Это поле обязательно для заполнения!',
    MIN_LENGTH: (length: number) => `Количество введенных символов должно быть не менее ${length}.`,
    MAX_LENGTH: (length: number) => `Количество введенных символов должно быть не более ${length}.`,
  },
};

const MEDIA_QUERIES = [
  {
    size: 'isMobile',
    rule: '(max-width: 766px)',
  },
  {
    size: 'isDesktop',
    rule: '(min-width: 767px)',
  },
];

const TABS = {
  PORTFOLIO: 'portfolio',
  EDUCATION: 'education',
  ABOUT_ME: 'aboutMe',
};

const API_URLS = {
  WEATHER: {
    CURRENT: 'https://api.weatherapi.com/v1/current.json?',
    FORECAST: 'https://api.weatherapi.com/v1/forecast.json?',
  },
  CURRENCY: 'https://www.cbr-xml-daily.ru/latest.js',
  COIN: 'https://api.cryptorank.io/v1/currencies?',
  QUOTES: 'https://api.api-ninjas.com/v1/quotes?',
};

const DEFAULT_ACTIVE_TAB = TABS.EDUCATION;

export {PAGES, THEME, ERRORS, TABS, DEFAULT_ACTIVE_TAB, MEDIA_QUERIES, API_URLS};
