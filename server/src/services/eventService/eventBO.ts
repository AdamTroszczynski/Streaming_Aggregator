import { createEventDAO } from '@/services/eventService/eventDAO';
import type Event from '@/types/Event';

/**
 * Create new event BO
 * @param {Event} event
 * @returns {Event} created event
 */
export const createEventBO = async (event: Event): Promise<Event> => {
  return await createEventBO(event);
};
