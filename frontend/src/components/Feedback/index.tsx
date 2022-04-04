import React from 'react';
import Animal from 'react-animals';
import { getRandomAnimal, getRandomColor } from '../../helpers';
import { TFeedback } from '../../types';

type TProps = {
    feedback: TFeedback;
}

export default function Feedback({ feedback }: TProps) {
  const animal = getRandomAnimal();
  const color = getRandomColor();

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
      <div style={{ marginRight: '10px' }}>
        <Animal
          name={animal}
          size="50px"
          color={color}
        />
      </div>
      <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
      }}>
          <div style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
          }}>
              <div style={{
                fontSize: '1.2em',
                fontWeight: '400',
              }}>Anonimus {animal}</div>
              <div style={{
                fontSize: '1.2em',
                fontWeight: '400',
              }}>{feedback.rating}</div>
          </div>
        <div>{feedback.description}</div>
      </div>
   </div>
  );
}
