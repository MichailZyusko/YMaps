import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import DB from '../../../../db/instance';
import ApiError from '../../../../errors/ApiError';

type TUpdate = {
  description: string;
  rating: number;
};

class DTO {
  public id: string;

  public description: string;

  public rating: number;

  constructor({ description, rating } : TUpdate) {
    this.id = uuid();
    this.description = description;
    this.rating = rating;
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const feedback = new DTO(req.body);
    const isSuccessfullyUpdated = await DB.GeoObjects.findByIdAndUpdate({ id, feedback });

    if (!isSuccessfullyUpdated) {
      throw new ApiError(404, 'Point not found');
    }

    const updatedPoint = await DB.GeoObjects.findById({ id });

    res.status(201).json(updatedPoint);
  } catch (error: any) {
    next(error);
  }
};
