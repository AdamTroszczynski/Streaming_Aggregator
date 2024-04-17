import express from 'express';
import {
  getAllEventsAction,
  getEventsByDateAction,
  getEventByIdAction,
  createEventAction,
  updateEventAction,
  deleteEventAction,
} from '@/controller/eventController';
import { paramStringValid, paramNumberValid, eventObjectValid } from '@/validators/eventValidators';
import { validRequest } from '@/middleware/valid';

const eventRouter = express.Router();

eventRouter.get('/events', getAllEventsAction);

eventRouter.get('/events/date/:timestamp', [paramNumberValid('timestamp'), validRequest], getEventsByDateAction);

eventRouter.get('/events/:id', [paramStringValid('id'), validRequest], getEventByIdAction);

eventRouter.post('/events', [...eventObjectValid, validRequest], createEventAction);

eventRouter.put('/events/:id', [...eventObjectValid, validRequest], updateEventAction);

eventRouter.delete('/events/:id', [paramStringValid('id'), validRequest], deleteEventAction);

export default eventRouter;
