import {ObjectId} from 'mongoose';

export interface WeatherCurrent {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: Date;
  };
  current: {
    last_updated_epoch: number;
    last_updated: Date;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

export interface WeatherForecast {
  location: {
    name: string;
  };
  forecast: {
    forecastday: [
      {
        date: Date;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          avgtemp_c: number;
          condition: {
            icon: string;
          };
        };
        astro: {
          sunrise: string;
          sunset: string;
        };
      }
    ];
  };
}

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

export interface LifeSubitem {
  id: string;
  title: string;
}

export interface LifeItem {
  id: string;
  title: string;
  items: Array<LifeSubitem>;
}

export type {ThemeSwitcher};
