import { TPoint } from '../types';

/* eslint-disable-next-line */
export const defaultPoint: TPoint = {
  id: '',
  type: '',
  name: '',
  props: {
    name: '',
    feedbacks: [
      {
        id: '',
        rating: 0,
        description: '',
      },
    ],
  },
  coords: [0, 0],
};
