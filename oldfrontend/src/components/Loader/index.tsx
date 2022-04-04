import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

export default function ClockSpinner() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'black',
      width: '100%',
      height: '100vh',
    }}
    >
      <ScaleLoader height={50} width={5} radius={5} margin={7} color="white" />
    </div>
  );
}
