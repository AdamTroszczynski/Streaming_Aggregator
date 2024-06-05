import express from 'express';
import {
  getAllEventsAction,
  getEventsByDateAction,
  getEventByIdAction,
  createEventAction,
  updateEventAction,
  deleteEventAction,
} from '@/controller/eventController';
import {
  getEventsByDateValidators,
  getEventByIdValidators,
  createEventValidators,
  updateEventValidators,
  deleteEventValidators,
} from '@/middleware/validators/eventValidators';
import { validRequest } from '@/middleware/validators/commonValidators';
import { verifyToken } from '@/middleware/auth';

const eventRouter = express.Router();

eventRouter.get('/events', getAllEventsAction);

eventRouter.get('/events/date/:timestamp', [...getEventsByDateValidators, validRequest], getEventsByDateAction);

eventRouter.get('/events/:id', [...getEventByIdValidators, validRequest], getEventByIdAction);

eventRouter.post('/events', [verifyToken, ...createEventValidators, validRequest], createEventAction);

eventRouter.put('/events/:id', [verifyToken, ...updateEventValidators, validRequest], updateEventAction);

eventRouter.delete('/events/:id', [verifyToken, ...deleteEventValidators, validRequest], deleteEventAction);

export default eventRouter;
