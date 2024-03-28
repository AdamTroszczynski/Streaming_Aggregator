import type { Request, Response } from 'express';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import dbClient from '@/services/dbClient';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import type Message from '@/types/Message';
import {
  getAllMessagesBO,
  updateMessageBO,
} from '@/services/messageService/messageBO';
import { createEventBO, getEventByIdBO, deleteEventBO } from '@/services/eventService/eventBO';
import Event from '@/types/Event';
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
    const receivedEvent: Event | null = await getEventByIdBO(id);
    res.status(StatusCodesEnum.OK).json(receivedEvent);
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
    const { event } = req.body;
    const createdEvent: Event = await createEventBO(event);
    res.status(StatusCodesEnum.OK).json(createdEvent);
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
    const deletedEvent: Event = await deleteEventBO(id);
    res.status(StatusCodesEnum.OK).json(deletedEvent);
  } catch (err) {
    console.error(err);
    res.status(StatusCodesEnum.ServerError).json({ msg: ErrorMessagesEnum.ServerError });
  } finally {
    await dbClient.$disconnect();
  }
};
