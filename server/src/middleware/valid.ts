import type { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';

/**
 * Middleware to check if there are some request errors and send specific message
 * @param {Request} req Request
 * @param {Response} res Response
 * @param {NextFunction} next Next function
 */
export const validRequest = (req: Request, res: Response, next: NextFunction) => {
  const validResult = validationResult(req);
  if (!validResult.isEmpty()) {
    return res.status(StatusCodesEnum.ValidationError).json({ errors: validResult.array() });
  }

  return next();
};
