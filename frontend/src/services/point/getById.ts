import axios from 'axios';
import { url } from '../../constants';
import { TPoint } from '../../types';

type TProps = {
  id: string
};

type TResponse = {
  data: TPoint;
};

export default async ({ id }: TProps): Promise<TPoint> => {
  const { data: point } = (await axios.get(`${url}/${id}`)) as TResponse;

  return point;
};
