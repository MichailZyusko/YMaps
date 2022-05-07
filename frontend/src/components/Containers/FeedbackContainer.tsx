import React from 'react';
import styled from 'styled-components';
import { TFeedback } from '../../types';
import Feedback from '../Feedback';

type TProps = {
  feedbacks: TFeedback[];
}

const Container = styled.div`
  height: 30vh;
  overflow-y: auto;
  margin: 20px 0;
  
  //@media (max-width: 500px) {
  //  height: 30vh;
  //}
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
