import { TFeedback } from '../types';

export const calculateAverageRating = (feedbacks: TFeedback[]): number => feedbacks.reduce((acc, curr) => acc + +curr.rating, 0) / feedbacks.length;
