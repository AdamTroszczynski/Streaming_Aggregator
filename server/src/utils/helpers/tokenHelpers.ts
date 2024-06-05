import jwt from 'jsonwebtoken';
import type User from '@/types/User';

/**
 * Helper function to prepare/create new token
 * @param {User} user User object
 * @returns {string} string token
 */
export const createToken = (user: User): string => {
  const token = jwt.sign(
    { id: user.id, email: user.email, isAdmin: user.isAdmin },
    process.env.TOKEN_KEY ?? 'abcd1234',
    { expiresIn: '1h' },
  );

  return token;
};

/**
 * Create verification token with user id and user email
 * @param {User} user user object
 * @returns {string} verification token
 */
export const createVerificationToken = (user: User): string => {
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.TOKEN_KEY ?? 'abcd1234', { expiresIn: '1h' });
  return token;
};
