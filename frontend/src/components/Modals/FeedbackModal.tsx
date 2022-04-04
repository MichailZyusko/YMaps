import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { calculateAverageRating } from '../../helpers';
import { PointService } from '../../services';
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
  /* eslint-disable-next-line */
    onDelete: (id: string) => void;
    point: TPoint;
};

export default function FeedbackModal({
  isOpen, onClose, onDelete, point,
}: TProps) {
  const [feedbacks, setFeedbacks] = React.useState<TFeedback[]>([]);
  // @ts-ignore
  const { id, props: { name } } = point;

  const rating = calculateAverageRating(feedbacks);

  useEffect(() => {
    // @ts-ignore
    setFeedbacks(point.props.feedbacks);
  }, [point]);

  // @ts-ignore
  const onSubmit = async ({ feedback }) => {
    const { status, updatedPoint } = await PointService.update({ id, feedback });

    if (status === 201) {
      // @ts-ignore
      setFeedbacks(updatedPoint.props.feedbacks);
    }
  };

  const onDeleteHandler = () => {
    /* eslint-disable-next-line */
    const pswd = prompt('Enter password to delete this place', 'pswd');

    if (pswd === 'pswd') {
      onDelete(id);
    } else {
      /* eslint-disable-next-line */
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
        <FeedbackForm onSubmit={onSubmit} />
      </ModalContainer>
      <FormButtonContainer>
        <SubmitButton onClick={onDeleteHandler} style={{
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
