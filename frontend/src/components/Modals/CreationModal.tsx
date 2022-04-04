import React from 'react';
import Modal from 'react-modal';
import { SubmitButton } from '../Buttons';
import { FormButtonContainer, ModalContainer } from '../Containers';
import { CreationFrom } from '../Forms';
import style from './styles';

Modal.setAppElement('#root');

type TProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (values: any) => void;
};

export default function CreationModal({ isOpen, onClose, onSubmit }: TProps) {
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

      onSubmit(values);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={style}
    >
      <ModalContainer>
        <CreationFrom />
      </ModalContainer>
      <FormButtonContainer>
        <SubmitButton onClick={onClickHandler}>Submit</SubmitButton>
      </FormButtonContainer>
    </Modal>
  );
}
