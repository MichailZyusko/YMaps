import { PointType } from '../constants/enums';

type TFeedback = {
  id: string;
  description: string;
  rating: number;
};

export type TPoint = {
  id: string;
  type?: PointType,
  name?: string;
  props?: {
    name?: string;
    feedbacks?: TFeedback[];
  };
  coordinates: [number, number];
};

export type TMappedPoint = {
  id: string;
  data: string;
};
