import React from 'react';
import Modal from 'react-modal';
import { calculateAverageRating } from '../../helpers';
import { TFeedback, TPoint } from '../../types';
import Button from '../Buttons';
import {
  PlaceHeaderContainer, ModalContainer, FormButtonContainer, FeedbackContainer,
} from '../Containers';
import SubmitForm from '../Forms';
import style from './styles';

Modal.setAppElement('#root');

type TProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (values: any) => void;
    point: TPoint;
};

export default function FeedbackModal({
  isOpen, onClose, onSubmit, point,
}: TProps) {
  // @ts-ignore
  const { props: { name, feedbacks } } = point;

  const rating = calculateAverageRating(feedbacks);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={style}
    >
      <ModalContainer>
        <PlaceHeaderContainer placeName={name} rating={rating} />
        <FeedbackContainer feedbacks={feedbacks} />
      </ModalContainer>
      <FormButtonContainer>
        <Button onClick={() => console.log(123)}>Submit</Button>
      </FormButtonContainer>
    </Modal>
  );
}
