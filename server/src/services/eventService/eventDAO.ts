import dbClient from '@/services/dbClient';
import type Event from '@/types/Event';

/**
 * Create new Event DAO
 * @param {Event} content
 * @returns {Event} created event
 */
export const createEventDAO = async (content: Event): Promise<Event> => {
  return await dbClient.event.create({
    data: {
      eventName: content.eventName,
      tag: content.tag,
      language: content.language,
      streamingLink: content.streamingLink,
      startDate: content.startDate,
      endDate: content.endDate,
      organizationFormalName: content.organizationFormalName,
      organizationDisplayName: content.organizationDisplayName,
      country: content.country,
      city: content.city,
      postalCode: content.postalCode,
      streetAddress: content.streetAddress,
      phoneNumber: content.phoneNumber,
      email: content.email,
      websiteLink: content.websiteLink,
      photo: content.photo,
    },
  });
};
