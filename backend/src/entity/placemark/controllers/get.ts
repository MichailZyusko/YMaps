import { NextFunction, Request, Response } from 'express';
import db from '../../../db/instance';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const placemarks = await db.Placemark.findAll();

    res.status(201).json(placemarks);
  } catch (error: any) {
    next(error);
  }
};
