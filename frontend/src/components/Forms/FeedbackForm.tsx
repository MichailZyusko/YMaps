import React from 'react';
import styled from 'styled-components';
import { Input, Label } from './Components';
import { getFormData } from '../../helpers';
import { SendButton } from '../Buttons';

type TProps = {
  onSubmit: (values: any) => void;
};

const Form = styled.form`
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
`;

export default function FeedbackForm({ onSubmit }: TProps) {
  const onClickHandler = () => {
    const form = document.querySelector('form') as HTMLFormElement;
    const feedback = getFormData(form);

    onSubmit({ feedback });
  };

  return (
    <Form>
      <Input.Rating
        label="Rating"
        name="rating"
      />
      <Label
        style={{ justifyContent: 'center' }}
        htmlFor={'description'}
      >
        {'Description'}
      </Label>
      <Container>
        <Input.TextArea
          name="description"
          placeholder="Leave us your feedback. It's important to us"
        />
        <SendButton onClick={onClickHandler} />
      </Container>
    </Form>
  );
}
