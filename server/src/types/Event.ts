type Event = {
  eventId?: string;
  eventName: string;
  eventDescription: string;
  eventCategory: string;
  eventLanguage: string;
  eventLink: string;
  eventStart: number | Date;
  eventEnd: number | Date;
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
};

export default Event;
