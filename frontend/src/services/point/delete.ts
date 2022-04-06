import axios from 'axios';
import { url } from '../../constants';

type TProps = {
  id: string
};

type TReturnValue = {
  status: number
};

export default async ({ id }: TProps): Promise<TReturnValue> => {
  const { status } = (await axios.delete(`${url}/${id}`)) as TReturnValue;

  return { status };
};
