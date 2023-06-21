import {ObjectId} from 'mongoose';

// type Status = 'done' | 'inProgress' | 'todo';
// type Priority = 'high' | 'medium' | 'low';

export enum Status {
  Done = 'Done',
  InProgress = 'InProgress',
  ToDo = 'ToDo',
}

export enum Priority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

enum Role {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user',
}

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
