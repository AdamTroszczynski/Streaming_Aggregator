import { deleteEventDAO } from '@/services/eventService/eventDAO';
import type Event from '@/types/Event';

/**
 * Delete event BO
 * @param {string} id event id
 * @returns {Event} deleted event
 */
export const deleteEventBO = async (id: string): Promise<Event> => {
  return await deleteEventDAO(id);
};