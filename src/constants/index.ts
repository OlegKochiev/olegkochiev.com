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
    backgroundColor: '#202627',
    color: '#ddd',
    lineColor: '#404040',
  },
  LIGHT: {
    backgroundColor: '#fafcff',
    color: '#000',
    lineColor: '#a0a0a0',
  },
};

const ERRORS = {
  FIELD: {
    IS_REQUIRED: 'Это поле обязательно для заполнения!',
    LENGTH: 'Колчичество введенных символов должно быть не менее 6!',
  },
};

export {PATHS, THEME, ERRORS};
