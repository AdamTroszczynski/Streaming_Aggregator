import axios from 'axios';
import axiosClient from '@/utils/axiosClient';
import type { EventsPrevArrays } from '@/types/commonTypes';
import sendData from '@/TestData';

/** Get all day's events based on day's timestamp
 * @param {number} timestamp Day's timestamp
 * @returns {Promise<EventsPrevArrays>}
 */
export const getEventsPreview = async (
  timestamp: number,
): Promise<EventsPrevArrays | any> => {
  const response = await axiosClient.get(`/event/events/date/${timestamp}`);
  const data = response.data;
  return data;
};

/** Add new event action
 * @param {Event} event Event object
 * @returns {Promise<Event>} Added event's object
 */
export const addEvent = async (event: Event, token: string): Promise<Event> => {
  const response = await axiosClient.post(
    '/event/...',
    { event },
    {
      headers: { 'x-access-token': token },
    },
  );
  const data = response.data;
  return data;
};

export const testServices = (timeStamp: number) => {
  return sendData(timeStamp);
};
