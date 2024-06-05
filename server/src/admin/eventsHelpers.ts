import dbClient from '@/services/dbClient';
import type Event from '@/types/Event';
import { createEventDAO, deleteAllEventsDAO } from '@/services/eventService/eventDAO';

export const createTestData = async (): Promise<void> => {
  await deleteAllEventsDAO();
  const date = new Date();
  let counter = 1;

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 5; j++) {
      const event: Event = {
        eventName: `test ${counter++}`,
        eventDescription: 'test',
        eventCategory: 'test',
        eventLanguage: 'test',
        eventLink: 'test',
        eventStart: date,
        eventEnd: date,
        companyName: 'test',
        companyEmail: 'test',
        companyNip: 'test',
        companyNumber: 'test',
        companyWeb: 'test',
        companyZipcode: 'test',
        companyCountry: 'test',
        companyProvince: 'test',
        companyCity: 'test',
        companyStreet: 'test',
      };

      await createEventDAO(event);
      date.setHours(date.getHours() + 1);
    }

    date.setDate(date.getDate() + 1);
  }

  await dbClient.$disconnect();
};
