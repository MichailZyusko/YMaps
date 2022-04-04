import styled from 'styled-components';
import sendIcon from '../../assets/send.svg';

type TProps = {
  onClick: () => void;
};

const ButtonContainer = styled.div`
  margin-left: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: lightgray;
  cursor: pointer,
`;

export default function SendButton({ onClick }: TProps) {
  return (
    <ButtonContainer onClick={onClick}>
      <img src={sendIcon} />
    </ButtonContainer>
  );
}
