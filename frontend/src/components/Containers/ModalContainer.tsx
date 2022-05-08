import React from 'react';
import styled from 'styled-components';

type TProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  background-color: rgb(243, 243, 243);
  border-radius: 20px;
  padding: 2rem 2rem 1rem 2rem;

  @media (max-width: 500px) {
    height: clamp(70vh, fit-content, 80vh);
    width: clamp(68vw, 73vw, 75vw);
  }
`;

export default function ModalContainer({ children }: TProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
