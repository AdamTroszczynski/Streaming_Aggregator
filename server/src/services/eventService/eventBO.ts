import { createEventDAO } from '@/services/eventService/eventDAO';
import type Event from '@/types/Event';

/**
 * Create new event BO
 * @param {event} content
 * @returns {Event} created event
 */
export const createEventBO = async (content: Event): Promise<Event> => {
  return await createEventBO(content);
};
