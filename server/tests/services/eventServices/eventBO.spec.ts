import { createTestData } from '@/admin/eventsHelpers';
import dbClient from '@/services/dbClient';
import { getEventsByDateBO } from '@/services/eventService/eventBO';
import { deleteAllEventsDAO } from '@/services/eventService/eventDAO';
import type { DateEvent } from '@/types/common';

describe('eventBO.ts', (): void => {
  beforeAll(async (): Promise<void> => {
    await createTestData();
  }, 10000);

  afterAll(async (): Promise<void> => {
    await deleteAllEventsDAO();
  }, 10000);

  afterEach(async (): Promise<void> => {
    await dbClient.$disconnect();
  }, 10000);

  describe('getEventsByDateBO', (): void => {
    it('Should fetch all events from database', async (): Promise<void> => {
      // GIVEN
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      const timestamp = date.getTime();

      // WHEN
      const dateEvents: DateEvent = await getEventsByDateBO(timestamp);

      // THEN
      expect(Object.keys(dateEvents).length).toBe(5);
    });
  });
});
