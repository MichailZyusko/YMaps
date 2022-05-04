import { TFeedback, TMappedPoint, TPoint } from '../../../entity/geoObjects/point/types';

export type saveProps = { point: TMappedPoint };
export type saveResult = Promise<boolean>;

export type findAllResult = Promise<TPoint[]>;

export type getByIdProps = { id: string; };
export type getByIdResult = Promise<TPoint>;

export type updateProps = {
  id: string,
  feedback: TFeedback
}
export type updateResult = Promise<boolean>;

export type deleteProps = {
  id: string
}
export type deleteResult = Promise<boolean>;
