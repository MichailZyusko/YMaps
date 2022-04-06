import React from 'react';
import styled from 'styled-components';

type TProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin-top: 25px;
`;

export default function FormButtonContainer({ children }: TProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
