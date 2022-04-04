import React from 'react';
import Button from '../Buttons';

type TProps = {
  children: React.ReactNode;
};

export default function FormButtonContainer({ children }: TProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '25px',
    }}
    >
      {children}
    </div>
  );
}
