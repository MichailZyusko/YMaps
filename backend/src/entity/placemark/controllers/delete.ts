import { NextFunction, Request, Response } from 'express';
import db from '../../../db/instance';
import ApiError from '../../../errors/ApiError';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const isSuccessfullyDeleted = await db.Placemark.deleteById(id);

    if (!isSuccessfullyDeleted) {
      throw new ApiError(404, 'Placemark not found');
    }

    res.status(204).json();
  } catch (error: any) {
    next(error);
  }
};
