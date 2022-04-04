import React from 'react';
import { TFeedback } from '../../types';
import Feedback from '../Feedback';

type TProps = {
    feedbacks: TFeedback[];
}

export default function FeedbackContainer({ feedbacks }: TProps) {
  return (
    <div style={{ maxHeight: '500px', overflow: 'auto', margin: '20px 0' }}>
      {feedbacks.map((feedback) => (
        <Feedback key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
}
