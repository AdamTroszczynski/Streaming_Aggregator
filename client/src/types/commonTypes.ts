import type { Event } from '@/types/Event';

export type EventsPrevArrays = { [key: string]: Event[] };

export type SelectOptions = { value: string; label: string };

export type AddEvent = {
  companyName: string;
  companyEmail: string;
  companyNip: string;
  companyNumber: string;
  companyWeb: string;
  companyZipcode: string;
  companyCountry: string;
  companyProvince: string;
  companyCity: string;
  companyStreet: string;

  eventName: string;
  eventDescription: string;
  eventCategory: string;
  eventLanguage: string;
  eventLink: string;
  eventDate: string;
  eventStart: string;
  eventEnd: string;

  accept: boolean;
};
