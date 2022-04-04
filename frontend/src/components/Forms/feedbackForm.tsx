import React from 'react';
import { Input, Label } from './Components';
import sendIcon from '../../assets/send.svg';

type TProps = {
  onSubmit: (values: any) => void;
};

export default function FeedbackForm({ onSubmit }: TProps) {
  const onClickHandler = () => {
    const inputs = document.querySelector('form')?.elements;

    if (inputs) {
      // @ts-ignore
      const values = Array.from(inputs).reduce((acc: any, input: HTMLInputElement) => {
        if (input.name === 'rating') {
          if (input.checked) {
            acc[input.name] = input.value;
          }
        } else {
          acc[input.name] = input.value;
        }

        return acc;
      }, {});

      onSubmit({ feedback: values });
    }
  };

  return (
        <form style={{
          marginTop: '20px',
        }}>
            <Input.Rating label="Rate" name="rating" />
            <Label style={{ justifyContent: 'center' }} htmlFor={'description'}>{'Description'}</Label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0',
            }}>
                <Input.TextArea label="" style={{ marginBottom: '0' }} name="description" placeholder="Оставьте свой отзыв. Нам это важно" />
                <div
                    style={{
                      marginLeft: '30px',
                      width: '50px',
                      height: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '10px',
                      backgroundColor: 'lightgray',
                      cursor: 'pointer',
                    }}
                    onClick={onClickHandler}
                >
                    <img src={sendIcon} />
                </div>
            </div>
        </form>
  );
}
