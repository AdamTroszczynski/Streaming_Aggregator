export type Event = {
  eventId: string;
  eventName: string;
  tag: string;
  language: string;
  streamingLink: string;
  startDate: number;
  endDate: number;
  organizationFormalName?: string;
  organizationDisplayName?: string;
  country?: string;
  city?: string;
  postalCode?: string;
  streetAddress?: string;
  phoneNumber?: string;
  email?: string;
  websiteLink?: string;
  photo?: string;
};
