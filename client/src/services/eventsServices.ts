import axios from 'axios';
import axiosClient from '@/utils/axiosClient';
import type { EventsPrevArrays } from '@/types/commonTypes';
import type { Event } from '@/types/Event';
import sendData from '@/TestData';

/** Get all day's events based on day's timestamp
 * @returns {Promise<EventsPrevArrays>}
 */
export const getEventsPreview = async (
  timestamp: number,
): Promise<EventsPrevArrays | any> => {
  try {
    const response = await axiosClient.get(`/event/events/date/${timestamp}`);
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
    throw new Error();
  }
};

export const testServices = (timeStamp: number) => {
  return sendData(timeStamp);
};
