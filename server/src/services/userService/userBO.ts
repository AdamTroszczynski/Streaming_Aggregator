import User from '@/types/User';
import {
  getUserByUsernameDAO,
  getUserByIdDAO,
  getUserByEmailDAO,
  createUserDAO,
  verifyUserDAO,
} from '@/services/userService/userDAO';

/**
 * Get user by username BO
 * @param {string} username username
 * @returns {Promise<User | null>} user object or null if user is not found
 */
export const getUserByUsernameBO = async (username: string): Promise<User | null> => {
  return await getUserByUsernameDAO(username);
};

/**
 * Get user by id BO
 * @param {number} id id
 * @returns {Promise<User | null>} user object or null if user is not found
 */
export const getUserByIdBO = async (id: string): Promise<User | null> => {
  return await getUserByIdDAO(id);
};

/**
 * Get user by email BO
 * @param {string} email email to find
 * @returns {Promise<User | null>} user object or null if user is not found
 */
export const getUserByEmailBO = async (email: string): Promise<User | null> => {
  return await getUserByEmailDAO(email);
};

/**
 * Create new user BO
 * @param {string} username username
 * @param {string} email email address
 * @param {string} passwordHash encoded password
 * @returns {Promise<User>} created user object
 */
export const createUserBO = async (username: string, email: string, passwordHash: string): Promise<User> => {
  return await createUserDAO(username, email, passwordHash);
};

/**
 * Verify user BO
 * @param {string} id user id
 * @returns {Promise<string>} verified user id
 */
export const verifyUserBO = async (id: string): Promise<string> => {
  const user = await verifyUserDAO(id);
  return user.id;
};
