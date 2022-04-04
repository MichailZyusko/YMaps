import React from 'react';
import styled from 'styled-components';

type TProps = {
  onClick: (values: any) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const StyledButton = styled.button.attrs((props) => ({
  type: props?.type || 'button',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  font-size: 1.2rem;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 250px;
  width: 180px;
  height: fit-content;
  padding: 15px;
  text-align: center;
  border: none;
  background-color: #ffe400;
  color: darkgray;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #ffe400;
    color: black;
  };
`;

export default function Button({ children, onClick, style }: TProps) {
  return (
    <StyledButton onClick={onClick} style={style}>
      {children}
    </StyledButton>
  );
}
