import dbClient from '@/services/dbClient';
import type Event from '@/types/Event';

/**
 * Delete event DAO
 * @param {string} id event id
 * @returns {Message} event message
 */
export const deleteMessageDAO = async (id: string): Promise<Event> => {
  return await dbClient.event.delete({
    where: {
      eventId: id,
    },
  });
};
