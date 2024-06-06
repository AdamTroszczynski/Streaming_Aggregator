import type { Request, Response } from 'express';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import dbClient from '@/services/dbClient';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import { regenerateEventDataBO } from '@/services/eventService/eventBO';

/**
 * Regenerate preview data for events
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const regenerateEventDataAction = async (req: Request, res: Response): Promise<void> => {
  try {
    await regenerateEventDataBO();
    res.status(StatusCodesEnum.OK).json({ msg: 'Regenerated event data successfully' });
  } catch (err) {
    console.error(err);
    res.status(StatusCodesEnum.ServerError).json({ msg: ErrorMessagesEnum.ServerError });
  } finally {
    await dbClient.$disconnect();
  }
};
