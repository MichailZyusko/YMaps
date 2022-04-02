import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import db from '../../../../db/instance';
import { TMappedPoint, TPoint } from '../types';
import ApiError from '../../../../errors/ApiError';

class DTO {
  public id: string;

  public data: string;

  constructor(data: any) {
    this.id = uuid();
    this.data = JSON.stringify({
      type: data.type,
      geometry: data.geometry,
      props: {
        name: data.properties.name,
        feedbacks: [
          {
            id: uuid(),
            description: data.properties.description,
            rating: data.properties.rating,
          },
        ],
      },
    });
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const point = new DTO(req.body) as TMappedPoint;
    const isSuccessfullyCreated: boolean = await db.GeoObjects.save(point);

    if (!isSuccessfullyCreated) {
      throw new ApiError(400, 'Invalid data');
    }

    const pointData = JSON.parse(point.data);

    res.status(201).json({
      id: point.id,
      coords: pointData.geometry.coordinates,
      name: pointData.props.name,
    });
  } catch (error: any) {
    next(error);
  }
};
