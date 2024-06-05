import type Event from '@/types/Event';
import type User from '@/types/User';

export type EventsPrevArrays = { [key: string]: Event[] };

export type SelectOptions = { value: string; label: string };

export type EventTime = { eventStartNum: number; eventEndNum: number };

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
  username: string;
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
  eventStart: string;
  eventEnd: string;
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
