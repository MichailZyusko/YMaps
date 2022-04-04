import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backgroundColor: black;
`;

export default function ClockSpinner() {
  return (
    <Container>
      <ScaleLoader height={50} width={5} radius={5} margin={7} color="white" />
    </Container>
  );
}
