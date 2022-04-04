import { TPoint } from '../types';

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
