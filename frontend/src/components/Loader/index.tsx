import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 400px;
  width: 100%;
  
  background-color: rgb(243,243,243);
`;

export default function ClockSpinner() {
  return (
    <Container>
      <ClipLoader size={50} color="#505050" />
    </Container>
  );
}
