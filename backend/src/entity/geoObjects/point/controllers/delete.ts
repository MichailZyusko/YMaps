import { NextFunction, Request, Response } from 'express';
import DB from '../../../../db/instance';
import ApiError from '../../../../errors/ApiError';

type TParams = {
  id: string;
};

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params as TParams;
    const isSuccessfullyDeleted: boolean = await DB.GeoObjects.deleteById({ id });

    if (!isSuccessfullyDeleted) {
      throw new ApiError(404, 'Placemark not found');
    }

    res.status(204).json();
  } catch (error: any) {
    next(error);
  }
};
