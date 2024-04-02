import {
  getAllEventsDAO,
  getEventsByDateDAO,
  createEventDAO,
  getEventByIdDAO,
  deleteEventDAO,
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
  const eventsGroupedByStartDate: DateEvent = {};

  // Convert Date to timestamp
  events.forEach((event: Event) => {
    event.startDate = (event.startDate as Date).getTime();
    event.endDate = (event.endDate as Date).getTime();
  });

  events.forEach((event: Event) => {
    const keyTimestamp: number = new Date(event.startDate).getTime();
    if (!eventsGroupedByStartDate.hasOwnProperty(keyTimestamp)) {
      eventsGroupedByStartDate[keyTimestamp] = [event];
    } else {
      eventsGroupedByStartDate[keyTimestamp].push(event);
    }
  });

  const compareDuration = (a: Event, b: Event): number => {
    const durationA = (a.endDate as number) - (a.startDate as number);
    const durationB = (b.endDate as number) - (b.startDate as number);
    return durationA - durationB;
  };

  for (const key in eventsGroupedByStartDate) {
    eventsGroupedByStartDate[key].sort(compareDuration);
  }

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
 * Delete event BO
 * @param {string} id event id
 * @returns {Event} deleted event
 */
export const deleteEventBO = async (id: string): Promise<Event> => {
  return await deleteEventDAO(id);
};
