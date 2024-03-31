import {
  getAllEventsDAO,
  getEventsByDateDAO,
  createEventDAO,
  getEventByIdDAO,
  deleteEventDAO,
  updateEventDAO,
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
