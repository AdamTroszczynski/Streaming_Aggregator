import User from '@/types/User';
import dbClient from '@/services/dbClient';

/**
 * Get user by username DAO
 * @param {string} username username
 * @returns {Promise<User | null>} user object or null if user is not found
 */
export const getUserByUsernameDAO = async (username: string): Promise<User | null> => {
  return (await dbClient.user.findFirst({ where: { username: username } })) as User | null;
};

/**
 * Get user by id DAO
 * @param {number} id id
 * @returns {Promise<User | null>} user object or null if user is not found
 */
export const getUserByIdDAO = async (id: string): Promise<User | null> => {
  return (await dbClient.user.findFirst({
    where: { id: id },
    select: { id: true, username: true, email: true, isAdmin: true, isVerified: true },
  })) as User | null;
};

/**
 * Get user by email DAO
 * @param {string} email email to find
 * @returns {Promise<User | null>} user object or null if user is not found
 */
export const getUserByEmailDAO = async (email: string): Promise<User | null> => {
  return (await dbClient.user.findFirst({ where: { email: email } })) as User | null;
};

/**
 * Create new user BO
 * @param {string} username username
 * @param {string} email email address
 * @param {string} passwordHash encoded password
 * @returns {Promise<User>} created user object
 */
export const createUserDAO = async (username: string, email: string, passwordHash: string): Promise<User> => {
  return await dbClient.user.create({
    data: { username: username, email: email, passwordHash: passwordHash, isAdmin: false, isVerified: false },
  });
};

/**
 * Verify user DAO
 * @param {string} id user id
 * @returns {Promise<User>} verified user
 */
export const verifyUserDAO = async (id: string): Promise<User> => {
  return await dbClient.user.update({
    where: { id: id },
    data: { isVerified: true },
  });
};
