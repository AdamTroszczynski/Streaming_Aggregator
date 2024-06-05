import dbClient from '@/services/dbClient';
import { createTestData } from '@/admin/eventsHelpers';
import {
  createEventDAO,
  deleteAllEventsDAO,
  deleteEventDAO,
  getAllEventsDAO,
  getEventByIdDAO,
  getEventsByDateDAO,
} from '@/services/eventService/eventDAO';
import { getEndOfDay } from '@/utils/date/commonDate';
import type Event from '@/types/Event';

describe('eventDAO.ts', (): void => {
  beforeAll(async (): Promise<void> => {
    await createTestData();
  }, 10000);

  afterAll(async (): Promise<void> => {
    await deleteAllEventsDAO();
  }, 10000);

  afterEach(async (): Promise<void> => {
    await dbClient.$disconnect();
  }, 10000);

  describe('getAllEventsDAO', (): void => {
    it('Should fetch all events from database', async (): Promise<void> => {
      // GIVEN

      // WHEN
      const events = await getAllEventsDAO();

      // THEN
      expect(events.length).toBe(35);
    });
  });

  describe('getEventsByDateDAO', (): void => {
    it('Should fetch only events from specific date', async (): Promise<void> => {
      // GIVEN
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      const timestamp = date.getTime();

      // WHEN
      const events = await getEventsByDateDAO(timestamp);

      // THEN
      expect(events.length).toBe(5);
      events.forEach((event) => {
        expect(new Date(event.eventStart).getTime()).toBeGreaterThanOrEqual(date.getTime());
        expect(new Date(event.eventStart).getTime()).toBeLessThan(getEndOfDay(timestamp).getTime());
      });
    });
  });

  describe('getEventByIdDAO', (): void => {
    it('Should fetch one event with specific id', async (): Promise<void> => {
      // GIVEN
      const events = await getAllEventsDAO();
      const id = events[1].eventId!;

      // WHEN
      const event = await getEventByIdDAO(id);

      // THEN
      expect(event?.eventName).toBe('test 2');
    });
  });

  describe('createEventDAO', (): void => {
    it('Should creates nw event record', async (): Promise<void> => {
      // GIVEN
      const event: Event = {
        eventName: 'Test 999',
        eventDescription: 'test',
        eventCategory: 'test',
        eventLanguage: 'test',
        eventLink: 'test',
        eventStart: new Date().getTime(),
        eventEnd: new Date().getTime(),
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

      // WHEN
      const createdEvent = await createEventDAO(event);

      // THEN
      expect(createdEvent.eventName).toBe('Test 999');
    });
  });

  describe('deleteEventDAO', (): void => {
    it('Should correctly remove event from database', async (): Promise<void> => {
      // GIVEN
      const eventsBefore = await getAllEventsDAO();

      // WHEN
      await deleteEventDAO(eventsBefore[0].eventId!);

      // THEN
      const eventsAfter = await getAllEventsDAO();
      expect(eventsBefore.length).toBe(36);
      expect(eventsAfter.length).toBe(35);
    });
  });
});
