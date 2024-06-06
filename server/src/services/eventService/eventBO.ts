import {
  getAllEventsDAO,
  getEventsByDateDAO,
  createEventDAO,
  getEventByIdDAO,
  deleteEventDAO,
  updateEventDAO,
  deleteAllEventsDAO,
} from '@/services/eventService/eventDAO';
import type Event from '@/types/Event';
import type { DateEvent } from '@/types/common';

/**
 * Get all events BO
 * @returns {Event[]} array of events
 */
export const getAllEventsBO = async (): Promise<Event[]> => {
  return await getAllEventsDAO();
};

/**
 * Get events by date BO
 * @param {number} timestamp date that events come from (with ms)
 * @returns {DateEvent} map where id is start date (start time) and value is array of events
 */
export const getEventsByDateBO = async (timestamp: number): Promise<DateEvent> => {
  const events = await getEventsByDateDAO(timestamp);
  const eventsGroupedByStartDate: DateEvent = { finish: [], now: [] };

  // Convert Date to timestamp
  events.forEach((event: Event) => {
    event.eventStart = (event.eventStart as Date).getTime();
    event.eventEnd = (event.eventEnd as Date).getTime();
  });

  const realTime = new Date();
  const currentDate = new Date(timestamp);
  currentDate.setHours(realTime.getHours(), realTime.getMinutes(), realTime.getSeconds(), realTime.getMilliseconds());
  const currentTimestamp = currentDate.getTime();

  events.forEach((event: Event) => {
    const keyTimestamp: number = new Date(event.eventStart).getTime();
    const endTimestamp: number = new Date(event.eventEnd).getTime();

    if (keyTimestamp >= currentTimestamp || (keyTimestamp < currentTimestamp && endTimestamp >= currentTimestamp)) {
      eventsGroupedByStartDate.now.push(event);
    } else {
      eventsGroupedByStartDate.finish.push(event);
    }
  });

  const compareDuration = (a: Event, b: Event): number => {
    const durationA = (a.eventEnd as number) - (a.eventStart as number);
    const durationB = (b.eventEnd as number) - (b.eventStart as number);
    return durationA - durationB;
  };

  eventsGroupedByStartDate.finish.sort(compareDuration);
  eventsGroupedByStartDate.now.sort(compareDuration);

  return eventsGroupedByStartDate;
};

/**
 * Get event by id BO
 * @param {string} id event id
 * @returns {Event|null} event or null if event with `id` doesn't exists
 */
export const getEventByIdBO = async (id: string): Promise<Event | null> => {
  return await getEventByIdDAO(id);
};

/**
 * Create new event BO
 * @param {Event} event
 * @returns {Event} created event
 */
export const createEventBO = async (event: Event): Promise<Event> => {
  return await createEventDAO(event);
};

/**
 * Update event BO
 * @param {string} id event id
 * @param {Event} event event content
 * @returns {Event} updated event
 */
export const updateEventBO = async (id: string, event: Event): Promise<Event> => {
  return await updateEventDAO(id, event);
};

/**
 * Delete event BO
 * @param {string} id event id
 * @returns {Event} deleted event
 */
export const deleteEventBO = async (id: string): Promise<Event> => {
  return await deleteEventDAO(id);
};

/** Regenerate event data BO */
export const regenerateEventDataBO = async (): Promise<void> => {
  await deleteAllEventsDAO();
  const date = new Date();
  let counter = 1;

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 8; j++) {
      const event: Event = {
        eventName: `Event ${counter++}`,
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
      date.setHours(date.getHours() + 2);
    }

    date.setDate(date.getDate() + 1);
  }
};
