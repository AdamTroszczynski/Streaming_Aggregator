import express from 'express';
import {createOrganizationAction, getOrganizationByIdAction, getAllOrganizationsAction, updateOrganizationAction, deleteOrganizationAction} from '@/controller/organizationController';

const organizationRouter = express.Router();

organizationRouter.post('/createOrganization', createOrganizationAction);

organizationRouter.get('/getOrganization/:organizationId',getOrganizationByIdAction);

organizationRouter.get('/getOrganizations', getAllOrganizationsAction);

organizationRouter.put('/updateOrganization/:organizationId', updateOrganizationAction);

organizationRouter.delete('/deleteOrganization/:organizationId', deleteOrganizationAction);

export default organizationRouter;
