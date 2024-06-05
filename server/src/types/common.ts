import User from '@/types/User';
import IDateEventMap from '@/interfaces/IDateEventMap';

export type DateEvent = IDateEventMap;

export type RequestError = {
  name: string;
  errorMsg: string | object;
};

export type UserToken = {
  user: User;
  token: string;
};
