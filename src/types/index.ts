type ThemeSwitcher = {
  OnOff: boolean;
};

export interface Theme {
  backgroundColor: string;
  color: string;
  lineColor: string;
  blueColor: string;
  mode: string;
}

export interface Project {
  title: string;
  description: string;
  hashtags: string[];
  date: Date;
  images: Blob[];
}

export type {ThemeSwitcher};
