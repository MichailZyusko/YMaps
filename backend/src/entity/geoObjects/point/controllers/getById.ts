import { NextFunction, Request, Response } from 'express';
import db from '../../../../db/instance';
import { TPoint } from '../types';

type TParams = {
  id: string;
};

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params as TParams;
    const potint: TPoint = await db.GeoObjects.findById(id);

    res.status(201).json(potint);
  } catch (error: any) {
    next(error);
  }
};
