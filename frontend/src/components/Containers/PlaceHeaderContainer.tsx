import React from 'react';
import styled from 'styled-components';

type TProps = {
  placeName: string;
  rating: string;
}

const ComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: ${({ style }) => style?.fontSize || '1.4rem'};
  font-weight: ${({ style }) => style?.fontWeight || '500'};
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 400;
  letter-spacing: 0.1em;
`;

function Star() {
  return (
    <div className="rating-css">
      <div className="star-icon">
        <label className="fa fa-star" />
      </div>
    </div>
  );
}

export default function PlaceHeaderContainer({ placeName, rating }: TProps) {
  return (
    <ComponentContainer>
      <Text>{placeName}</Text>
      <RatingContainer>
        {rating}/5
        <Star />
      </RatingContainer>
    </ComponentContainer>
  );
}
