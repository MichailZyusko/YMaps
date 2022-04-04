import { TFeedback } from '../types';
import { animals } from '../constants';

export const calculateAverageRating = (feedbacks: TFeedback[]): string => (feedbacks
  .reduce((acc, curr) => acc + +curr.rating, 0) / feedbacks.length)
  .toFixed(2);

export const getRandomAnimal = (): string => animals[Math.floor(Math.random() * animals.length)];

export const getRandomColor = (): string => `#${Math.random().toString(16).substr(-6)}`;
