import { createEventDAO } from '@/services/eventService/eventDAO';
import type Event from '@/types/Event';

/**
 * Create new event BO
 * @param {Event} event
 * @returns {Event} created event
 */
export const createEventBO = async (event: Event): Promise<Event> => {
  return await createEventDAO(event);
};

/**
 * Get event by id BO
 * @param {string} id event id
 * @returns {Event|null} event or null if event with `id` doesn't exists
 */
export const getEventByIdBO = async (id: string): Promise<Event | null> => {
  return await getEventByIdDAO(id);
};
