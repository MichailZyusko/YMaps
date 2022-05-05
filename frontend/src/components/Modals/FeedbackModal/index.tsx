import React, { useState } from 'react';
import Modal from 'react-modal';
import PointService from '../../../services';
import { TFeedback, TPoint } from '../../../types';
import Buttons from '../../Buttons';
import Containers from '../../Containers';
import Forms from '../../Forms';
import style from '../styles';
import { useFeedbackModalDispatch, useFeedbackModalSelector } from '../../../redux/hooks';
import { selectFeedbackModal, closeFeedbackModal, updateFeedbackModal } from './slice';
import { calculateAverageRating } from '../../../helpers';
import ClockSpinner from '../../Loader';

Modal.setAppElement('#root');

type TProps = { onDelete: (id: string) => void};

export default function FeedbackModal({ onDelete }: TProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, point } = useFeedbackModalSelector(selectFeedbackModal);
  const dispatch = useFeedbackModalDispatch();

  if (!isOpen) return null;

  const { id, props: { name, feedbacks, type } } = point as TPoint;

  const submitHandler = async ({ feedback }: { feedback: TFeedback }) => {
    setIsLoading(true);
    const { status, updatedPoint } = await PointService.update({ id, feedback });

    if (status === 201 && updatedPoint) {
      dispatch(updateFeedbackModal(updatedPoint));
    }
    setIsLoading(false);
  };

  const deleteHandler = () => {
    const password = prompt('Enter password to delete this place');

    if (password === 'admin') {
      onDelete(id);
    } else {
      alert('Wrong password');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeFeedbackModal())}
      style={style}
    >
      <Containers.Modal>
        <Containers.PlaceHeader
          placeName={name}
          type={type}
          rating={calculateAverageRating(feedbacks)}
        />
          <hr style={{ width: '85%', margin: 'auto' }}/>
        {isLoading && feedbacks.length > 0
          ? <ClockSpinner />
          : <Containers.Feedback feedbacks={feedbacks}
          />}
          <hr style={{ width: '85%', margin: 'auto' }}/>
        <Forms.Feedback onSubmit={submitHandler} />
      </Containers.Modal>
      <Containers.FormButton>
        <Buttons.Submit onClick={deleteHandler} style={{
          backgroundColor: 'red',
          fontWeight: '500',
          color: 'white',
        }}>
          Delete
        </Buttons.Submit>
      </Containers.FormButton>
    </Modal>
  );
}
