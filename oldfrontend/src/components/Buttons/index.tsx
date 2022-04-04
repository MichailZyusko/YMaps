import React from 'react';
import StyledButton from './Components';

type Props = {
  onClick: (values: any) => void;
  children: React.ReactNode;
};

export default function Button({ children, onClick }: Props) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}
