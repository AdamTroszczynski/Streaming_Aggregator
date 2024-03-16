import express from 'express';
import {createEvent, getEventById, getAllEvents, updateEvent, deleteEvent} from '@/controller/eventController';

const eventRouter = express.Router();

eventRouter.post('/createEvent', createEvent);
eventRouter.get('/getEvent/:eventId', getEventById);
eventRouter.get('/getEvents', getAllEvents);
eventRouter.put('/updateEvent/:eventId', updateEvent);
eventRouter.delete('/deleteEvent/:eventId', deleteEvent);

export default eventRouter;
