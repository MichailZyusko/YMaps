import React from 'react';

type TProps = {
  placeName: string;
  rating: string;
}

export default function PlaceHeaderContainer({ placeName, rating }: TProps) {
  return (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
          >
              <div style={{
                fontSize: '1.4em',
                fontWeight: '500',
              }}>{placeName}</div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2em',
                fontWeight: '400',
                letterSpacing: '0.1em',
              }}>
                  {rating}/5
                  <div className="rating-css">
                    <div className="star-icon">
                      <label className="fa fa-star"></label>
                    </div>
                  </div>
              </div>
          </div>
  );
}
