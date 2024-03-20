import type { Request, Response } from 'express';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';

/**
 * Get all events action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getAllEventsAction = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodesEnum.OK).json({ msg: 'Get all events' });
};

/**
 * Get single event by id action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getEventByIdAction = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  res.status(StatusCodesEnum.OK).json({ msg: `Get single event with id: ${Number(id)}` });
};

/**
 * Create event action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const createEventAction = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodesEnum.OK).json({ msg: 'Create event' });
};

/**
 * Update single event by id action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const updateEventAction = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  res.status(StatusCodesEnum.OK).json({ msg: `Update event with id: ${Number(id)}` });
};

/**
 * Delete single event by id action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const deleteEventAction = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  res.status(StatusCodesEnum.OK).json({ msg: `Delete event with id: ${Number(id)}` });
};
