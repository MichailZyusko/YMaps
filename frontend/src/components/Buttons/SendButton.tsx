import styled from 'styled-components';
import sendIcon from '../../assets/send.svg';

type TProps = {
  onClick: () => void;
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 50px;
  height: 50px;
  
  margin-left: 30px;
  border-radius: 10px;
  background-color: lightgray;
  cursor: pointer;
`;

export default function SendButton({ onClick }: TProps) {
  return (
    <ButtonContainer onClick={onClick}>
      <img src={sendIcon} alt="Send button" />
    </ButtonContainer>
  );
}
