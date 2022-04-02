import { NextFunction, Request, Response } from 'express';
import db from '../../../../db/instance';
import { TPoint } from '../types';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const points: TPoint[] = await db.GeoObjects.findAll();

    res.status(201).json(points);
  } catch (error: any) {
    next(error);
  }
};
