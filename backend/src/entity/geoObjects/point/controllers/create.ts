import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import DB from '../../../../db/instance';
import { TMappedPoint } from '../types';
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
        type: data.properties.type,
      },
    });
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const point = new DTO(req.body) as TMappedPoint;
    const isSuccessfullyCreated: boolean = await DB.GeoObjects.save({ point });

    if (!isSuccessfullyCreated) {
      throw new ApiError(400, 'Invalid data');
    }

    const pointData = JSON.parse(point.data);

    res.status(201).json({
      id: point.id,
      type: pointData.props.type,
      coords: pointData.geometry.coordinates,
      name: pointData.props.name,
    });
  } catch (error: any) {
    next(error);
  }
};
