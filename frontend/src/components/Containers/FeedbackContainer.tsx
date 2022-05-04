import React from 'react';
import styled from 'styled-components';
import { TFeedback } from '../../types';
import Feedback from '../Feedback';

type TProps = {
  feedbacks: TFeedback[];
}

const Container = styled.div`
  max-height: 500px;
  overflow-y: auto;
  margin: 20px 0;
`;

export default function FeedbackContainer({ feedbacks }: TProps) {
  return (
    <Container>
      {feedbacks.map((feedback) => (
        <Feedback key={feedback.id} feedback={feedback} />
      ))}
    </Container>
  );
}
