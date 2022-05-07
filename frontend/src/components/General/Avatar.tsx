import React from 'react';
import styled from 'styled-components';
import AvatarImg from '../../assets/pictures/avatar.png';

const Img = styled.img`
  margin: 40px 0 0 0;
  border-radius: 50%;

  @media (min-device-width: 500px) {
    width: 50% !important;
  }
  
  @media (max-device-width: 500px) {
   width: 90% !important;
  }
`;

export default function Avatar() {
  return <Img src={AvatarImg} alt={'Michail Zyusko avatar'} />;
}
