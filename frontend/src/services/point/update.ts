import axios from 'axios';
import { url } from '../../constants';
import { TFeedback, TPoint } from '../../types';

type TProps = {
  id: string;
  feedback: TFeedback;
};

type Response = {
  data: TPoint;
  status: number;
};

type ReturnValue = {
  status: number;
  updatedPoint: TPoint;
};

export default async ({ id, feedback }: TProps): Promise<ReturnValue> => {
  const { status, data: updatedPoint } = (await axios.put(`${url}/${id}`, feedback)) as Response;

  return { status, updatedPoint };
};
