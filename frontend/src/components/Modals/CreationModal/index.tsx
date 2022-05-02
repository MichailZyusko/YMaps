import React from 'react';
import Modal from 'react-modal';
import { SubmitButton } from '../../Buttons';
import { FormButtonContainer, ModalContainer } from '../../Containers';
import { CreationFrom } from '../../Forms';
import style from '../styles';
import { getFormData } from '../../../helpers';
import { useCreationModalDispatch, useCreationModalSelector } from '../../../redux/hooks';
import { selectCreationModal, closeCreationModal } from './slice';

Modal.setAppElement('#root');

type TProps = { onSubmit: (values: any) => void };

export default function CreationModal({ onSubmit }: TProps) {
  const { isOpen } = useCreationModalSelector(selectCreationModal);
  const dispatch = useCreationModalDispatch();

  const clickHandler = () => {
    const form = document.querySelector('form') as HTMLFormElement;
    const formData = getFormData(form);

    onSubmit(formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeCreationModal())}
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
