import styled from 'styled-components';
import React from 'react';

const Header = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: #505050;
  
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 3rem);
  padding: 1rem 1rem 2rem 1rem;
  margin: 0;
 `;

type ScreenProps = {
  header: string;
  children: any;
}

export const P = styled.p`
  width: 75%;
  font-weight: 400;
  font-size: 1.2em;
  color: #505050;
  
  @media (max-width: 500px) {  
    width: 90%; 
  }
`;

export function Screen({ header, children }: ScreenProps) {
  return (
    <>
      <Header>{header}</Header>
      <Main>
        {children}
      </Main>
    </>
  );
}
