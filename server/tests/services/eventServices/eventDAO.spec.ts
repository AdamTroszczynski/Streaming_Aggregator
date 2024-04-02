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
  });

  afterAll(async (): Promise<void> => {
    await deleteAllEventsDAO();
  });

  afterEach(async (): Promise<void> => {
    await dbClient.$disconnect();
  });

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
        expect(new Date(event.startDate).getTime()).toBeGreaterThanOrEqual(date.getTime());
        expect(new Date(event.startDate).getTime()).toBeLessThan(getEndOfDay(timestamp).getTime());
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
      expect(event?.eventName).toBe('Test 1');
    });
  });

  describe('createEventDAO', (): void => {
    it('Should creates nw event record', async (): Promise<void> => {
      // GIVEN
      const event: Event = {
        eventName: 'Test 999',
        tag: 'test',
        language: 'test',
        streamingLink: 'test',
        startDate: new Date().getTime(),
        endDate: new Date().getTime(),
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
