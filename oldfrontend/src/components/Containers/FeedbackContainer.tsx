import React from 'react';
import { TFeedback } from '../../types';
import Feedback from '../Feedback';

type TProps = {
    feedbacks: TFeedback[];
}

export default function FeedbackContainer({ feedbacks }: TProps) {
  return (
    <>
      {feedbacks.map((feedback) => (
        <Feedback key={feedback.id} feedback={feedback} />
      ))}
      <hr />
    </>
  );
}
