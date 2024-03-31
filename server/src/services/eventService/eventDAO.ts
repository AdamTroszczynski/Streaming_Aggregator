import dbClient from '@/services/dbClient';
import type Event from '@/types/Event';
import { getEndOfDay } from '@/utils/date/commonDate';

/**
 * Get all events DAO
 * @returns {Promise<Event[]>} all events
 */
export const getAllEventsDAO = async (): Promise<Event[]> => {
  return await dbClient.event.findMany();
};

/**
 * Get events by date BO
 * @param {number} timestamp date that events come from (with ms)
 * @returns {Event[]} array of events from specific date
 */
export const getEventsByDateDAO = async (timestamp: number): Promise<Event[]> => {
  return await dbClient.event.findMany({
    where: {
      startDate: {
        gte: new Date(timestamp),
        lt: getEndOfDay(timestamp),
      },
    },
  });
};

/**
 * Get event by id DAO
 * @param {string} id event id
 * @returns {Promise<Event|null>} event or null if event with `id` doesn't exists
 */
export const getEventByIdDAO = async (id: string): Promise<Event | null> => {
  return await dbClient.event.findFirst({
    where: {
      eventId: id,
    },
  });
};

/**
 * Create new event DAO
 * @param {Event} event
 * @returns {Promise<Event>} created event
 */
export const createEventDAO = async (event: Event): Promise<Event> => {
  return await dbClient.event.create({
    data: {
      eventName: event.eventName,
      tag: event.tag,
      language: event.language,
      streamingLink: event.streamingLink,
      startDate: new Date(Number(event.startDate)),
      endDate: new Date(Number(event.endDate)),
      organizationFormalName: event.organizationFormalName,
      organizationDisplayName: event.organizationDisplayName,
      country: event.country,
      city: event.city,
      postalCode: event.postalCode,
      streetAddress: event.streetAddress,
      phoneNumber: event.phoneNumber,
      email: event.email,
      websiteLink: event.websiteLink,
      photo: event.photo,
    },
  });
};

/**
 * Delete event DAO
 * @param {string} id event id
 * @returns {Promise<Event>} deleted Event
 */
export const deleteEventDAO = async (id: string): Promise<Event> => {
  return await dbClient.event.delete({
    where: {
      eventId: id,
    },
  });
};
