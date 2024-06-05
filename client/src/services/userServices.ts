import axios, { AxiosResponse } from 'axios';
import axiosClient from '@/utils/axiosClient';
import { type UserToken } from '@/types/commonTypes';
import type User from '@/types/User';

/** Login action
 * @param {string} username Username
 * @param {string} password Password
 * @returns {Promise<UserToken>} UserToken object
 */
export const login = async (
  email: string,
  password: string,
): Promise<UserToken> => {
  const response: AxiosResponse = await axiosClient.post('/auth/login', {
    email,
    password,
  });
  const data = response.data;
  return { user: data.user, token: data.token };
};

/** Register action
 * @param {string} username Username
 * @param {string} email Email
 * @param {string} password Password
 * @param {string} passwordRepeat Password repeat
 * @returns {Promise<UserToken>} UserToken object
 */
export const register = async (
  username: string,
  email: string,
  password: string,
  passwordRepeat: string,
): Promise<UserToken> => {
  const response: AxiosResponse = await axiosClient.post('/auth/register', {
    username,
    email,
    password,
    passwordRepeat,
  });
  const data = response.data;
  return { user: data.user, token: data.token };
};

/** Check token action
 * @param {string} token User's token
 * @returns {Promise<User>} User object
 */
export const checkToken = async (token: string): Promise<User> => {
  const response: AxiosResponse = await axiosClient.get('/auth/check', {
    headers: { 'x-access-token': token },
  });
  const data = response.data;
  return data;
};

/** Verify account action
 * @param {string} token Account token
 * @returns {Promise<string>} User object
 */
export const verifyAccount = async (token: string): Promise<void> => {
  const response: AxiosResponse = await axiosClient.post('/auth/verify', token);
  const data = response.data;
  return data;
};
