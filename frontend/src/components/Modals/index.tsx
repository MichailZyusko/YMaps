import React from 'react';
import Modal from 'react-modal';
import SubmitForm from '../Forms';
import style from './styles';

Modal.setAppElement('#root');

type TProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
};

export default function ModalWindow({ isOpen, onClose, onSubmit }: TProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={style}
    >
      <SubmitForm onSubmit={onSubmit} />
    </Modal>
  );
}
