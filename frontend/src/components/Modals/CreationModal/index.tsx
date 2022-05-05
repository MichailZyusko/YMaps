import React from 'react';
import Modal from 'react-modal';
import Buttons from '../../Buttons';
import Containers from '../../Containers';
import Forms from '../../Forms';
import style from '../styles';
import { getFormData } from '../../../helpers';
import { useCreationModalDispatch, useCreationModalSelector } from '../../../redux/hooks';
import { selectCreationModal, closeCreationModal } from './slice';

Modal.setAppElement('#root');

type TProps = { onSubmit: (values: any) => void };

export default function CreationModal({ onSubmit }: TProps) {
  const { isOpen } = useCreationModalSelector(selectCreationModal);
  const dispatch = useCreationModalDispatch();

  if (!isOpen) return null;

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
      <Containers.Modal>
        <Forms.Creation />
      </Containers.Modal>
      <Containers.FormButton>
        <Buttons.Submit onClick={clickHandler}>Submit</Buttons.Submit>
      </Containers.FormButton>
    </Modal>
  );
}
