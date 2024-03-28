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
