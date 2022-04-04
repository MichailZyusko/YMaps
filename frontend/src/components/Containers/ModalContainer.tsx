import React from 'react';

type TProps = {
  children: React.ReactNode;
};

export default function ModalContainer({ children }: TProps) {
  return (
    <div style={{
      backgroundColor: 'rgba(243, 243, 243, 1)',
      borderRadius: '20px',
      padding: '30px',
    }}
    >
      {children}
    </div>
  );
}
