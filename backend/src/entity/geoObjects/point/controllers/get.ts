import { NextFunction, Request, Response } from 'express';
import DB from '../../../../db/instance';
import { TPoint } from '../types';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const points: TPoint[] = await DB.GeoObjects.findAll();

    res.status(200).json(points);
  } catch (error: any) {
    next(error);
  }
};
