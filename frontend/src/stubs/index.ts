import { TPoint } from '../types';

export default {
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
} as TPoint;
