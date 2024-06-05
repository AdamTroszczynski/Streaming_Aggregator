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
      eventStart: {
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
      eventDescription: event.eventDescription,
      eventCategory: event.eventCategory,
      eventLanguage: event.eventLanguage,
      eventLink: event.eventLink,
      eventStart: new Date(Number(event.eventStart)),
      eventEnd: new Date(Number(event.eventEnd)),
      companyName: event.companyName,
      companyEmail: event.companyEmail,
      companyNip: event.companyNip,
      companyNumber: event.companyNumber,
      companyWeb: event.companyWeb,
      companyZipcode: event.companyZipcode,
      companyCountry: event.companyCountry,
      companyProvince: event.companyProvince,
      companyCity: event.companyCity,
      companyStreet: event.companyStreet,
    },
  });
};

/**
 * Update event DAO
 * @param {string} id event id
 * @param {Event} event event content
 * @returns {Event} updated event
 */
export const updateEventDAO = async (id: string, event: Event): Promise<Event> => {
  return await dbClient.event.update({
    where: {
      eventId: id,
    },
    data: {
      eventName: event.eventName,
      eventDescription: event.eventDescription,
      eventCategory: event.eventCategory,
      eventLanguage: event.eventLanguage,
      eventLink: event.eventLink,
      eventStart: new Date(Number(event.eventStart)),
      eventEnd: new Date(Number(event.eventEnd)),
      companyName: event.companyName,
      companyEmail: event.companyEmail,
      companyNip: event.companyNip,
      companyNumber: event.companyNumber,
      companyWeb: event.companyWeb,
      companyZipcode: event.companyZipcode,
      companyCountry: event.companyCountry,
      companyProvince: event.companyProvince,
      companyCity: event.companyCity,
      companyStreet: event.companyStreet,
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

/** Delete all events in database */
export const deleteAllEventsDAO = async (): Promise<void> => {
  await dbClient.event.deleteMany();
};
