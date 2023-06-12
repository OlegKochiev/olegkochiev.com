import {ObjectId} from 'mongoose';

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
  id?: ObjectId;
  title: string;
  description: string;
  startedAt: Date;
  finishedAt: Date;
}

export interface Course {
  id?: ObjectId;
  title: string;
  description: string;
  startedAt: Date;
  finishedAt: Date;
}

export interface User {
  email: string;
  password: string;
}

export type {ThemeSwitcher};
