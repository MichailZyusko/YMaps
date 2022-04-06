import React from 'react';
import Modal from 'react-modal';
import { SubmitButton } from '../Buttons';
import { FormButtonContainer, ModalContainer } from '../Containers';
import { CreationFrom } from '../Forms';
import style from './styles';
import { getFormData } from '../../helpers';

Modal.setAppElement('#root');

type TProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (values: any) => void;
};

export default function CreationModal({ isOpen, onClose, onSubmit }: TProps) {
  const clickHandler = () => {
    const form = document.querySelector('form') as HTMLFormElement;
    const formData = getFormData(form);

    onSubmit(formData);
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
        <SubmitButton onClick={clickHandler}>Submit</SubmitButton>
      </FormButtonContainer>
    </Modal>
  );
}
