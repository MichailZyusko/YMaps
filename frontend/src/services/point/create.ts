import axios from 'axios';
import { url } from '../../constants';
import { TPoint } from '../../types';

type TProps = {
  data: TPoint;
};

type TResponse = {
  data: TPoint;
  status: number;
};

type TReturnValue = {
  point: TPoint;
  status: number;
};

export default async ({ data }: TProps): Promise<TReturnValue> => {
  const { data: point, status } = (await axios.post(url, data) as TResponse);

  return { status, point };
};
