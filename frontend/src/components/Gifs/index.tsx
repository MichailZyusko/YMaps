import styled from 'styled-components';
import React from 'react';
import { P } from '../Modals/MenuModal/Components';

const Img = styled.img`
  max-width: 100%;
  max-height: 50%;
  margin: 0 5px;
  border-radius: 25px;
  border: 1px solid #ccc;
`;

type TProps = {
  src: string;
  alt: string;
  header: string;
  description: string;
}

export default function Gif({
  src, alt, header, description,
}: TProps) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem',
    }}>
      <h2>{header}</h2>
      <br />
      <Img src={src} alt={alt} />
      <br />
      <P>{description}</P>
      <br />
    </div>
  );
}
