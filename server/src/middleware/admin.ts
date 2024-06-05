import type { Response, NextFunction } from 'express';
import type { RequestError } from '@/types/common';
import type ITokenRequest from '@/interfaces/ITokenRequest';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';

/**
 * Middleware to verify if user is admin
 * @param {ITokenRequest} req Request
 * @param {Response} res Response
 * @param {NextFunction} next Next function
 */
export const verifyIsAdmin = (req: ITokenRequest, res: Response, next: NextFunction) => {
  if (req.user?.isAdmin) {
    return next();
  } else {
    return res
      .status(StatusCodesEnum.ResourceForbidden)
      .json({ name: ErrorMessagesEnum.ServerError, errorMsg: 'Access denied. Admins only.' } as RequestError);
  }
};
