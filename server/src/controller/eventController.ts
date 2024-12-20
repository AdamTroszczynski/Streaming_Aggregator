import type { Request, Response } from 'express';
import type Event from '@/types/Event';
import type { DateEvent } from '@/types/common';
import type ITokenRequest from '@/interfaces/ITokenRequest';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';
import dbClient from '@/services/dbClient';
import { ErrorMessagesEnum } from '@/enums/ErrorMessagesEnum';
import {
  getAllEventsBO,
  getEventsByDateBO,
  createEventBO,
  getEventByIdBO,
  deleteEventBO,
  updateEventBO,
} from '@/services/eventService/eventBO';

/**
 * Get all events action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getAllEventsAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const events: Event[] = await getAllEventsBO();
    res.status(StatusCodesEnum.OK).json(events);
  } catch (err) {
    console.error(err);
    res.status(StatusCodesEnum.ServerError).json({ msg: ErrorMessagesEnum.ServerError });
  } finally {
    await dbClient.$disconnect();
  }
};

/**
 * Get events by date action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getEventsByDateAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { timestamp } = req.params;
    const eventsByDate: DateEvent = await getEventsByDateBO(Number(timestamp));
    res.status(StatusCodesEnum.OK).json(eventsByDate);
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
export const createEventAction = async (req: ITokenRequest, res: Response): Promise<void> => {
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
export const updateEventAction = async (req: ITokenRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { event } = req.body;
    const updatedEvent: Event = await updateEventBO(id, event);
    res.status(StatusCodesEnum.OK).json(updatedEvent);
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
export const deleteEventAction = async (req: ITokenRequest, res: Response): Promise<void> => {
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
