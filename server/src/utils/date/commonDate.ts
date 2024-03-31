/**
 * Get end of the day based on timestamp value
 * @param {number} timestamp timestamp value (with ms)
 * @returns {Date} end of the day date object
 */
export const getEndOfDay = (timestamp: number): Date => {
  const date = new Date(timestamp);
  date.setHours(23, 59, 59, 999);
  return date;
};
