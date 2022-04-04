import axios from 'axios';
import { url } from '../../constants';
import { TPoint } from '../../types';

export default async (): Promise<TPoint[]> => {
  const { data: points } = (await axios.get(url)) as { data: TPoint[] };

  return points;
};
