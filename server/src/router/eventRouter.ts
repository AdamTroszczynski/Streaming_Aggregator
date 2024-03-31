import express from 'express';
import {
  getAllEventsAction,
  getEventsByDateAction,
  getEventByIdAction,
  createEventAction,
  updateEventAction,
  deleteEventAction,
} from '@/controller/eventController';

const eventRouter = express.Router();

eventRouter.get('/events', getAllEventsAction);

eventRouter.get('/events/date/:timestamp', getEventsByDateAction);

eventRouter.get('/events/:id', getEventByIdAction);

eventRouter.post('/events', createEventAction);

eventRouter.put('/events/:id', updateEventAction);

eventRouter.delete('/events/:id', deleteEventAction);

export default eventRouter;
