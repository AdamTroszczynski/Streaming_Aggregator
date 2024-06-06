import express from 'express';
import { regenerateEventDataAction } from '@/controller/adminController';
import { verifyToken } from '@/middleware/auth';
import { verifyIsAdmin } from '@/middleware/admin';

const adminRouter = express.Router();

adminRouter.get('/regenerate', [verifyToken, verifyIsAdmin], regenerateEventDataAction);

export default adminRouter;
