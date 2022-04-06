import axios from 'axios';
import { url } from '../../constants';
import { TPoint } from '../../types';

type TResponse = {
  data: TPoint[];
};

export default async (): Promise<TPoint[]> => {
  const { data: points } = (await axios.get(url)) as TResponse;

  return points;
};
