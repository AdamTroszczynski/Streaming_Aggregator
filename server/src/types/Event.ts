type Event = {
  eventId: string;
  eventName: string;
  tag: string;
  language: string;
  streamingLink: string;
  startDate: number | Date;
  endDate: number | Date;
  organizationFormalName: string;
  organizationDisplayName: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  phoneNumber: string;
  email: string;
  websiteLink: string;
  photo: string;
};

export default Event;
