const PATHS = {
  HOME: () => '/',
  PORTFOLIO: {
    ALL: () => '/portfolio',
    BY_NAME: (name: string) => `/portfolio/${name}`,
    BY_TAG: (tag: string) => `/portfolio/tag/${tag}`,
  },
  ABOUT_ME: () => '/about-me',
  EDUCATION: () => '/education',
};

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
};

const PAGES = {
  HOME: {
    TITLE: 'Сайт портфолио',
    PATH: () => '/',
  },
  PORTFOLIO: {
    TITLE: 'Портфолио',
    PATH: () => '/portfolio',
    BY_NAME: (name: string) => `/portfolio/${name}`,
    BY_TAG: (tag: string) => `/portfolio/tag/${tag}`,
  },
  ABOUT_ME: {
    TITLE: 'Обо мне',
    PATH: () => '/about-me',
  },
  EDUCATION: {
    TITLE: 'Образование',
    PATH: () => '/education',
  },
};

const ERRORS = {
  FIELD: {
    IS_REQUIRED: 'Это поле обязательно для заполнения!',
    MIN_LENGTH: (length: number) => `Количество введенных символов должно быть не менее ${length}!`,
    MAX_LENGTH: (length: number) => `Количество введенных символов должно быть не более ${length}!`,
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

// const MEDIA_QUERIES = ['(max-width: 766px)', '(min-width: 767px)'];

const TABS = {
  PORTFOLIO: 'portfolio',
  EDUCATION: 'education',
  ABOUT_ME: 'aboutMe',
};

const DEFAULT_ACTIVE_TAB = TABS.EDUCATION;

export {PAGES, THEME, ERRORS, TABS, DEFAULT_ACTIVE_TAB, MEDIA_QUERIES};
