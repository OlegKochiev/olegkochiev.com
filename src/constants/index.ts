const PATHS = {
  HOME: () => '/',
  PORTFOLIO: {
    ALL: () => '/portfolio',
    BY_NAME: (name) => `/portfolio/${name}`,
    BY_TAG: (tag) => `/portfolio/tag/${tag}`,
  },
  ABOUT_ME: () => '/about-me',
  EDUCATION: () => '/education',
};

const THEME = {
  DARK: {
    backgroundColor: '#202627',
    color: '#bbb',
    lineColor: '#404040',
  },
  LIGHT: {
    backgroundColor: '#fafcff',
    color: '#000',
    lineColor: '#a0a0a0',
  },
};

export {PATHS, THEME};
