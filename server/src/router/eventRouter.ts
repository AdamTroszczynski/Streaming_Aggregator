import express from 'express';
import {
  getAllEventsAction,
  getEventsByDateAction,
  getEventByIdAction,
  createEventAction,
  updateEventAction,
  deleteEventAction,
} from '@/controller/eventController';
import { paramStringValid, paramNumberValid } from '@/validators/eventValidators';

const eventRouter = express.Router();

eventRouter.get('/events', getAllEventsAction);

eventRouter.get('/events/date/:timestamp', paramNumberValid('timestamp'), getEventsByDateAction);

eventRouter.get('/events/:id', paramStringValid('id'), getEventByIdAction);

eventRouter.post('/events', createEventAction);

eventRouter.put('/events/:id', paramNumberValid('id'), updateEventAction);

eventRouter.delete('/events/:id', paramNumberValid('id'), deleteEventAction);

export default eventRouter;
