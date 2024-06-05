import { Request } from 'express';
import type User from '@/types/User';

/** Request that contains token and basic user info */
interface ITokenRequest extends Request {
  user?: User;
}

export default ITokenRequest;
