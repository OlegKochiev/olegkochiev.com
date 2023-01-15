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
    bgColor: {
      primary: '',
      secondary: '',
    },
    backgroundColor: '#202627',
    color: '#ddd',
    lineColor: '#404040',
    blueColor: '#078080',
  },
  LIGHT: {
    backgroundColor: '#fafcff',
    color: '#000',
    lineColor: '#a0a0a0',
    blueColor: '#078080',
  },
};

const ERRORS = {
  FIELD: {
    IS_REQUIRED: 'Это поле обязательно для заполнения!',
    MIN_LENGTH: (length: number) => `Количество введенных символов должно быть не менее ${length}!`,
    MAX_LENGTH: (length: number) => `Количество введенных символов должно быть не более ${length}!`,
  },
};

const TABS = {
  PORTFOLIO: 'portfolio',
  EDUCATION: 'education',
  ABOUT_ME: 'aboutMe',
};

const DEFAULT_ACTIVE_TAB = TABS.EDUCATION;

export {PATHS, THEME, ERRORS, TABS, DEFAULT_ACTIVE_TAB};
