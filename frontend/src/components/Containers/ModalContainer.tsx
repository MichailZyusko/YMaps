import React from 'react';
import styled from 'styled-components';

type TProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  background-color: rgb(243, 243, 243);
  border-radius: 20px;
  padding: 30px;
`;

export default function ModalContainer({ children }: TProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
