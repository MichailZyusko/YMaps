import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { calculateAverageRating } from '../../helpers';
import PointService from '../../services';
import { TFeedback, TPoint } from '../../types';
import { SubmitButton } from '../Buttons';
import {
  PlaceHeaderContainer, ModalContainer, FormButtonContainer, FeedbackContainer,
} from '../Containers';
import { FeedbackForm } from '../Forms';
import style from './styles';

Modal.setAppElement('#root');

type TProps = {
    isOpen: boolean;
    onClose: () => void;
    onDelete: (id: string) => void;
    point: TPoint;
};

export default function FeedbackModal({
  isOpen, onClose, onDelete, point,
}: TProps) {
  const [feedbacks, setFeedbacks] = React.useState<TFeedback[]>([]);
  const [rating, setRating] = React.useState<string>('0');
  const { id, props: { name } } = point as TPoint;

  useEffect(() => {
    setFeedbacks(point.props.feedbacks);
    setRating(calculateAverageRating(point.props.feedbacks));
  }, [point]);

  const submitHandler = async ({ feedback }: { feedback: TFeedback }) => {
    const { status, updatedPoint } = await PointService.update({ id, feedback });

    if (status === 201 && updatedPoint) {
      setFeedbacks(updatedPoint.props.feedbacks);
      setRating(calculateAverageRating(updatedPoint.props.feedbacks));
    }
  };

  const deleteHandler = () => {
    const password = prompt('Enter password to delete this place', 'password');

    if (password === 'password') {
      onDelete(id);
    } else {
      alert('Wrong password');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={style}
    >
      <ModalContainer>
        <PlaceHeaderContainer placeName={name} rating={rating} />
          <hr style={{ width: '85%', margin: 'auto' }}/>
        <FeedbackContainer feedbacks={feedbacks} />
          <hr style={{ width: '85%', margin: 'auto' }}/>
        <FeedbackForm onSubmit={submitHandler} />
      </ModalContainer>
      <FormButtonContainer>
        <SubmitButton onClick={deleteHandler} style={{
          backgroundColor: 'red',
          fontWeight: '500',
          color: 'white',
        }}>
          Delete
        </SubmitButton>
      </FormButtonContainer>
    </Modal>
  );
}
