import { NextFunction, Request, Response } from 'express';
import db from '../../../db/instance';
import { v4 as uuid } from 'uuid';
import { TPlacemark } from '../types';
import { PlacemarkType } from '../constants/enums';
import ApiError from '../../../errors/ApiError';

class DTOCreatePlacemark {
  public id: string;

  public name: string;

  public description: string;

  public lat: number;

  public lon: number;

  public type: PlacemarkType;

  public rating: number;

  constructor({
    type,
    coordinates,
    name,
    description,
    rating,
  } : TPlacemark) {
    this.id = uuid();
    this.name = name;
    this.description = description || 'Тут нет описания';
    [this.lat] = coordinates;
    [, this.lon] = coordinates;
    this.type = type;
    this.rating = rating || 0;
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const placemark = new DTOCreatePlacemark(req.body) as unknown as TPlacemark;
    const newItem = await db.Placemark.save(placemark);

    if (!newItem) {
      throw new ApiError(400, 'Invalid data');
    }

    res.status(201).json(placemark);
  } catch (error: any) {
    next(error);
  }
};
