import { type ValidationChain, param } from 'express-validator';

/**
 * Base validation for param field (trim + check if value is not empty)
 * @param {string} fieldName Name of the field
 * @returns {ValidationChain} validation chain
 */
export const paramBaseValid = (fieldName: string): ValidationChain =>
  param(fieldName).trim().notEmpty().withMessage('value must not be empty');

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
