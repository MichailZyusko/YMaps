import React from 'react';

type TProps = {
  placeName: string;
  rating: number;
}

export default function PlaceHeaderContainer({ placeName, rating }: TProps) {
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}
      >
        <div>{placeName}</div>
        <div>
          {rating}
          {' '}
          / 5
        </div>

      </div>
      <hr />
    </>
  );
}
