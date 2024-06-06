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

    if (!eventsGroupedByStartDate.hasOwnProperty(keyTimestamp)) {
      if (keyTimestamp >= currentTimestamp || (keyTimestamp < currentTimestamp && endTimestamp >= currentTimestamp)) {
        eventsGroupedByStartDate[keyTimestamp] = { finish: [], now: [event] };
      } else {
        eventsGroupedByStartDate[keyTimestamp] = { finish: [event], now: [] };
      }
    } else if (
      keyTimestamp >= currentTimestamp ||
      (keyTimestamp < currentTimestamp && endTimestamp >= currentTimestamp)
    ) {
      eventsGroupedByStartDate[keyTimestamp].now.push(event);
    } else {
      eventsGroupedByStartDate[keyTimestamp].finish.push(event);
    }
  });

  const compareDuration = (a: Event, b: Event): number => {
    const durationA = (a.eventEnd as number) - (a.eventStart as number);
    const durationB = (b.eventEnd as number) - (b.eventStart as number);
    return durationA - durationB;
  };

  for (const key in eventsGroupedByStartDate) {
    eventsGroupedByStartDate[key].finish.sort(compareDuration);
    eventsGroupedByStartDate[key].now.sort(compareDuration);
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
