import dbClient from '@/services/dbClient';
import type Event from '@/types/Event';
import { createEventDAO, deleteAllEventsDAO } from '@/services/eventService/eventDAO';

export const createTestData = async (): Promise<void> => {
  await deleteAllEventsDAO();
  const date = new Date();

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 5; j++) {
      const event: Event = {
        eventName: `Test ${j}`,
        tag: 'test',
        language: 'test',
        streamingLink: 'test',
        startDate: date.getTime(),
        endDate: date.getTime(),
        organizationFormalName: 'test',
        organizationDisplayName: 'test',
        country: 'test',
        city: 'test',
        postalCode: 'test',
        streetAddress: 'test',
        phoneNumber: 'test',
        email: 'test',
        websiteLink: 'test',
        photo: 'test',
      };

      await createEventDAO(event);
      date.setHours(date.getHours() + 1);
    }

    date.setDate(date.getDate() + 1);
  }

  await dbClient.$disconnect();
};
