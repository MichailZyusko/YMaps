export type TFeedback = {
  id: string;
  description: string;
  rating: number;
};

export type TPoint = {
  id: string;
  type?: string;
  name?: string;
  props: {
    name: string;
    feedbacks: TFeedback[];
  };
  coords: [number, number];
};
