import { type ValidationChain, param, body } from 'express-validator';

/**
 * Base validation for param field (trim + check if value is not empty)
 * @param {string} fieldName Name of the field
 * @returns {ValidationChain} validation chain
 */
export const paramBaseValid = (fieldName: string): ValidationChain =>
  param(fieldName).trim().notEmpty().withMessage('value must not be empty');

/**
 * Base validation for body field (trim + check if value is not empty)
 * @param {string} fieldName Name of the field
 * @returns {ValidationChain} validation chain
 */
export const bodyBaseValid = (fieldName: string): ValidationChain =>
  body(fieldName).trim().notEmpty().withMessage('value must not be empty');

/**
 * String validation for param field
 * @param {string} fieldName Name of the field
 * @returns {ValidationChain} validation chain
 */
export const paramStringValid = (fieldName: string): ValidationChain =>
  paramBaseValid(fieldName).isString().withMessage('value must be a string');

/**
 * Number validation for param field
 * @param {string} fieldName Name of the field
 * @returns {ValidationChain} validation chain
 */
export const paramNumberValid = (fieldName: string): ValidationChain =>
  paramBaseValid(fieldName).isNumeric().withMessage('value must be a number');

/**
 * String validation for body field
 * @param {string} fieldName Name of the field
 * @returns {ValidationChain} validation chain
 */
export const bodyStringValid = (fieldName: string): ValidationChain => bodyBaseValid(fieldName).isString();

/**
 * Number validation for body field
 * @param {string} fieldName Name of the field
 * @returns {ValidationChain} validation chain
 */
export const bodyNumberValid = (fieldName: string): ValidationChain => bodyBaseValid(fieldName).isNumeric();

/** Set of validators for event object */
export const eventObjectValid: ValidationChain[] = [
  bodyStringValid('event.eventName'),
  bodyStringValid('event.tag'),
  bodyStringValid('event.language'),
  bodyStringValid('event.streamingLink'),
  bodyNumberValid('event.startDate'),
  bodyNumberValid('event.endDate'),
  bodyStringValid('event.organizationFormalName'),
  bodyStringValid('event.organizationDisplayName'),
  bodyStringValid('event.country'),
  bodyStringValid('event.city'),
  bodyStringValid('event.postalCode'),
  bodyStringValid('event.streetAddress'),
  bodyStringValid('event.phoneNumber'),
  bodyStringValid('event.email'),
  bodyStringValid('event.websiteLink'),
  bodyStringValid('event.photo'),
];
