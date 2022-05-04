import { TFeedback } from '../types';
import { animals } from '../constants';

export const calculateAverageRating = (feedbacks: TFeedback[]): string => (feedbacks
  .reduce((acc, curr) => acc + +curr.rating, 0) / feedbacks.length || 0)
  .toFixed(1);

// eslint-disable-next-line no-bitwise
export const getRandomAnimal = (): string => animals[~~(Math.random() * animals.length)];

export const getRandomColor = (): string => `#${Math.random().toString(16).substr(-6)}`;

export const getFormData = (form: HTMLFormElement): { [key: string]: string } => {
  const formData = new FormData(form);
  const data = {} as Record<string, string>;

  formData.forEach((value, key) => {
    data[key] = value.toString();
  });

  return data;
};
