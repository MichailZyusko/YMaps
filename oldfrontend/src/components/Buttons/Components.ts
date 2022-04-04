import styled from 'styled-components';

export default styled.button.attrs((props) => ({
  type: props?.type || 'button',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  color: white;
  font-size: 1.2rem;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 250px;
  width: 200px;
  height: fit-content;
  padding: 15px;
  text-align: center;
  border: none;
  background-color: rgb(77%, 77%, 77%, 0.8);
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #ffe400;
    color: black;
  };
`;
