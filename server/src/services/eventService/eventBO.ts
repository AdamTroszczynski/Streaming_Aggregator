import { createEventDAO } from '@/services/eventService/eventDAO';
import type Event from '@/types/Event';

/**
 * Create new event BO
 * @param {Event} event
 * @returns {Event} created event
 */
export const createEventBO = async (event: Event): Promise<Event> => {
<<<<<<< HEAD
  return await createEventDAO(event);
=======
  return await createEventBO(event);
>>>>>>> 9237f3ca1769385beffd7513137af33539cbaa65
};
