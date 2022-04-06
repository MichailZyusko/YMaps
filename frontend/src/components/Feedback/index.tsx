import React from 'react';
import Animal from 'react-animals';
import styled from 'styled-components';
import { getRandomAnimal, getRandomColor } from '../../helpers';
import { TFeedback } from '../../types';

type TProps = {
    feedback: TFeedback;
}

const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const AnimalContainer = styled.div`
  margin-right: 10px;
`;

const Text = styled.div`
  font-size: ${({ style }) => style?.fontSize || '1.2'}em;
  font-weight: ${({ style }) => style?.fontWeight || '400'};
`;

const MessageHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export default function Feedback({ feedback }: TProps) {
  const animal = getRandomAnimal();
  const color = getRandomColor();

  return (
    <FeedbackContainer>
      <AnimalContainer>
        <Animal
          name={animal}
          size="50px"
          color={color}
        />
      </AnimalContainer>
      <MessageContainer>
        <MessageHeader>
          <Text>Anonimus {animal}</Text>
          <Text>{feedback.rating}</Text>
        </MessageHeader>
        <Text style={{ fontWeight: '300', fontSize: '1em' }}>
          {feedback.description}
        </Text>
      </MessageContainer>
   </FeedbackContainer>
  );
}
