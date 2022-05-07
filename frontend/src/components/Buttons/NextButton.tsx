import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
position: absolute;
  bottom: -20px;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.3rem;
  font-weight: 400;
  color: black;
  
  outline: none;

  max-width: 250px;
  width: 150px;
  height: fit-content;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  background-color: #ffe400;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  
  z-index: 2;
`;

type TProps = {
  onClick: () => void;
  children: React.ReactNode;
}

export default function NextButton({ onClick, children }: TProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
