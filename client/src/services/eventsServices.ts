import axios from 'axios';
import eventFetch from '@/utils/axiosClient';
import type { Event } from '@/types/commonTypes';

/** Get all day's events based on day's timestamp
 * @returns {Promise<{[key: string]: Event[]} | void>}
 */
export const getEventsPreview = async (
  timestamp: number,
): Promise<{ [key: string]: Event[] } | void> => {
  try {
    const response = await eventFetch('/...', { data: { timestamp } });
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
