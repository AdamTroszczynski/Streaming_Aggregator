import type { Request, Response } from 'express';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';

export const createEvent = async (req: Request, res: Response): Promise<void> => {
  res.sendStatus(StatusCodesEnum.OK);
};

export const getEventById = async (req: Request, res: Response): Promise<void> => {
  res.sendStatus(StatusCodesEnum.OK);
};

export const getAllEvents = async (req: Request, res: Response): Promise<void> => {
  res.sendStatus(StatusCodesEnum.OK);
};

export const updateEvent = async (req: Request, res: Response): Promise<void> => {
  res.sendStatus(StatusCodesEnum.OK);
};

export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
  res.sendStatus(StatusCodesEnum.OK);
};
