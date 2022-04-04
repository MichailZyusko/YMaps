import axios from 'axios';
import { url } from '../../constants';

type TProps = {
  id: string
};

export default async ({ id }: TProps): Promise<{ status: number }> => {
  const { status } = (await axios.delete(`${url}/${id}`)) as { status: number };

  return { status };
};
