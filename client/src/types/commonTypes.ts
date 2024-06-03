import type { Event } from '@/types/Event';

export type EventsPrevArrays = { [key: string]: Event[] };

export type SelectOptions = { value: string; label: string };

export type EventTime = { eventStart: number; eventEnd: number };

export type LoginForm = {
  email: string;
  password: string;
  isRemember: boolean;
};

export type RegisterForm = {
  nick: string;
  email: string;
  password: string;
  passwordRepeat: string;
};
