import axios from 'axios';
import axiosClient from '@/utils/axiosClient';
import type { EventsPrevArrays } from '@/types/commonTypes';
import type { Event } from '@/types/Event';

/** Get all day's events based on day's timestamp
 * @returns {Promise<EventsPrevArrays>}
 */
export const getEventsPreview = async (
  timestamp: number,
): Promise<EventsPrevArrays> => {
  try {
    const response = await axiosClient.get('/event/events', {
      data: timestamp,
    });
    const data = response.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};
