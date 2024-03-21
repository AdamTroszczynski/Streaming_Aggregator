import express from 'express';
import {
  createEventAction,
  getEventByIdAction,
  getAllEventsAction,
  updateEventAction,
  deleteEventAction,
} from '@/controller/eventController';

const eventRouter = express.Router();

eventRouter.get('/events', getAllEventsAction);

eventRouter.get('/events/:id', getEventByIdAction);

eventRouter.post('/events', createEventAction);

eventRouter.put('/events/:id', updateEventAction);

eventRouter.delete('/events/:id', deleteEventAction);

export default eventRouter;
