import express from 'express';
import {createEventAction, getEventByIdAction, getAllEventsAction, updateEventAction, deleteEventAction} from '@/controller/eventController';

const eventRouter = express.Router();

eventRouter.post('/createEvent', createEventAction);

eventRouter.get('/getEvent/:eventId', getEventByIdAction);

eventRouter.get('/getEvents', getAllEventsAction);

eventRouter.put('/updateEvent/:eventId', updateEventAction);

eventRouter.delete('/deleteEvent/:eventId', deleteEventAction);

export default eventRouter;
