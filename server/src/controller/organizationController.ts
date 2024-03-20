import type { Request, Response } from 'express';
import { StatusCodesEnum } from '@/enums/StatusCodesEnum';

/**
 * Create organization action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const createOrganizationAction = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodesEnum.OK);
};

/**
 * Get single organization by id action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getOrganizationByIdAction = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodesEnum.OK);
};

/**
 * Get all organizations action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const getAllOrganizationsAction = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodesEnum.OK);
};

/**
 * Update single organization by id action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const updateOrganizationAction = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodesEnum.OK);
};

/**
 * Delete single organization by id action
 * @param {Request} req Request
 * @param {Response} res Response
 */
export const deleteOrganizationAction = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodesEnum.OK);
};
