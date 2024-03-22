import type { Request, Response } from 'express';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import dbClient from '@/services/dbClient';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import type Message from '@/types/Message';
import {
  getAllMessagesBO,
  getMessageByIdBO,
  createMessageBO,
  updateMessageBO,
  deleteMessageBO,
} from '@/services/messageService/messageBO';

/**
 * Get all events action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getAllEventsAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages: Message[] = await getAllMessagesBO();
    res.status(StatusCodesEnum.OK).json(messages);
  } catch (err) {
    console.error(err);
    res.status(StatusCodesEnum.ServerError).json({ msg: ErrorMessagesEnum.ServerError });
  } finally {
    await dbClient.$disconnect();
  }
};

/**
 * Get single event by id action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getEventByIdAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const message: Message | null = await getMessageByIdBO(id);
    res.status(StatusCodesEnum.OK).json(message);
  } catch (err) {
    console.error(err);
    res.status(StatusCodesEnum.ServerError).json({ msg: ErrorMessagesEnum.ServerError });
  } finally {
    await dbClient.$disconnect();
  }
};

/**
 * Create event action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const createEventAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { content } = req.body;
    const message: Message = await createMessageBO(content);
    res.status(StatusCodesEnum.OK).json(message);
  } catch (err) {
    console.error(err);
    res.status(StatusCodesEnum.ServerError).json({ msg: ErrorMessagesEnum.ServerError });
  } finally {
    await dbClient.$disconnect();
  }
};

/**
 * Update single event by id action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const updateEventAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const message: Message = await updateMessageBO(id, content);
    res.status(StatusCodesEnum.OK).json(message);
  } catch (err) {
    console.error(err);
    res.status(StatusCodesEnum.ServerError).json({ msg: ErrorMessagesEnum.ServerError });
  } finally {
    await dbClient.$disconnect();
  }
};

/**
 * Delete single event by id action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const deleteEventAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const message: Message = await deleteMessageBO(id);
    res.status(StatusCodesEnum.OK).json(message);
  } catch (err) {
    console.error(err);
    res.status(StatusCodesEnum.ServerError).json({ msg: ErrorMessagesEnum.ServerError });
  } finally {
    await dbClient.$disconnect();
  }
};
