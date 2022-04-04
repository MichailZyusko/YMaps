import axios from 'axios';
import { url } from '../../constants';
import { TPoint } from '../../types';

type TProps = {
  id: string
};

export default async ({ id }: TProps): Promise<TPoint> => {
  const { data: point } = (await axios.get(`${url}/${id}`)) as { data: TPoint };

  return point;
};
