import React from 'react';
import Modal from 'react-modal';
import SubmitForm from '../Forms';
import style from './styles';

Modal.setAppElement('#root');

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalWindow({ isOpen, onClose }: TProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={style}
    >
      <SubmitForm />
    </Modal>
  );
}
