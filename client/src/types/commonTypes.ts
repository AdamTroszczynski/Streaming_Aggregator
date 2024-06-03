import type Event from '@/types/Event';
import type User from '@/types/User';

export type EventsPrevArrays = { [key: string]: Event[] };

export type SelectOptions = { value: string; label: string };

export type EventTime = { eventStart: number; eventEnd: number };

export type UserToken = {
  user: User;
  token: string;
};

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

export type AddEvent = {
  eventName: string;
  eventDescription: string;
  eventCategory: string;
  eventLanguage: string;
  eventLink: string;
  eventStart: string | number;
  eventEnd: string | number;
  eventDate: string;
  companyName: string;
  companyEmail: string;
  companyNip?: string;
  companyNumber?: string;
  companyWeb?: string;
  companyZipcode?: string;
  companyCountry?: string;
  companyProvince?: string;
  companyCity?: string;
  companyStreet?: string;
  accept: string;
};
