import axios from 'axios';
import { url } from '../../constants';
import { TPoint } from '../../types';

type TProps = {
  data: TPoint;
};

export default async ({ data }: TProps): Promise<{ status: number, point: TPoint }> => {
  const { data: point, status } = (await axios.post(url, data) as { data: TPoint, status: number });

  return { status, point };
};
