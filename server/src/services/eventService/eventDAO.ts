import dbClient from '@/services/dbClient';
import type Event from '@/types/Event';

/**
 * Create new event DAO
 * @param {Event} event
 * @returns {Event} created event
 */
export const createEventDAO = async (event: Event): Promise<Event> => {
  return await dbClient.event.create({
    data: {
      ...event
    },
  });
};
