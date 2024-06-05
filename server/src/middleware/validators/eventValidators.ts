import { fieldValidNumber, fieldValidString, fieldValidStringEmpty } from '@/middleware/validators/commonValidators';

export const getEventsByDateValidators = [fieldValidNumber('timestamp')];

export const getEventByIdValidators = [fieldValidString('id')];

export const createEventValidators = [
  fieldValidStringEmpty('event.eventName'),
  fieldValidStringEmpty('event.eventDescription'),
  fieldValidStringEmpty('event.eventCategory'),
  fieldValidStringEmpty('event.eventLanguage'),
  fieldValidStringEmpty('event.eventLink'),
  fieldValidNumber('event.eventStart'),
  fieldValidNumber('event.eventEnd'),
  fieldValidStringEmpty('event.companyName'),
  fieldValidStringEmpty('event.companyEmail'),
  fieldValidStringEmpty('event.companyNip'),
  fieldValidStringEmpty('event.companyNumber'),
  fieldValidStringEmpty('event.companyWeb'),
  fieldValidStringEmpty('event.companyZipcode'),
  fieldValidStringEmpty('event.companyCountry'),
  fieldValidStringEmpty('event.companyProvince'),
  fieldValidStringEmpty('event.companyCity'),
  fieldValidStringEmpty('event.companyStreet'),
];

export const updateEventValidators = [
  fieldValidStringEmpty('event.eventName'),
  fieldValidStringEmpty('event.eventDescription'),
  fieldValidStringEmpty('event.eventCategory'),
  fieldValidStringEmpty('event.eventLanguage'),
  fieldValidStringEmpty('event.eventLink'),
  fieldValidNumber('event.eventStart'),
  fieldValidNumber('event.eventEnd'),
  fieldValidStringEmpty('event.companyName'),
  fieldValidStringEmpty('event.companyEmail'),
  fieldValidStringEmpty('event.companyNip'),
  fieldValidStringEmpty('event.companyNumber'),
  fieldValidStringEmpty('event.companyWeb'),
  fieldValidStringEmpty('event.companyZipcode'),
  fieldValidStringEmpty('event.companyCountry'),
  fieldValidStringEmpty('event.companyProvince'),
  fieldValidStringEmpty('event.companyCity'),
  fieldValidStringEmpty('event.companyStreet'),
];

export const deleteEventValidators = [fieldValidString('id')];
