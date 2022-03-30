import { PlacemarkType } from '../constants/enums';

export type TPlacemark = {
  type: PlacemarkType,
  name: string;
  description?: string;
  coordinates: [number, number];
  rating?: number;
};
