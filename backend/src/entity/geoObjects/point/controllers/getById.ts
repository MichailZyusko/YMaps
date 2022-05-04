import { NextFunction, Request, Response } from 'express';
import DB from '../../../../db/instance';
import { TPoint } from '../types';

type TParams = {
  id: string;
};

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params as TParams;
    const point: TPoint = await DB.GeoObjects.findById({ id });

    res.status(200).json(point);
  } catch (error: any) {
    next(error);
  }
};
