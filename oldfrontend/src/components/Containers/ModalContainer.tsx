import React from 'react';

type TProps = {
  children: React.ReactNode;
};

export default function ModalContainer({ children }: TProps) {
  return (
    <div style={{
      backgroundColor: '#F3F3F3',
      borderRadius: '20px',
      padding: '40px',
    }}
    >
      {children}
    </div>
  );
}
