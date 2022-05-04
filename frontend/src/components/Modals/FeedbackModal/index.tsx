import React from 'react';
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

Modal.setAppElement('#root');

type TProps = { onDelete: (id: string) => void};

export default function FeedbackModal({ onDelete }: TProps) {
  const { isOpen, point } = useFeedbackModalSelector(selectFeedbackModal);
  const dispatch = useFeedbackModalDispatch();

  if (!isOpen) return null;
  const { id, props: { name, feedbacks, type } } = point as TPoint;

  const submitHandler = async ({ feedback }: { feedback: TFeedback }) => {
    const { status, updatedPoint } = await PointService.update({ id, feedback });

    // TODO: FIXME
    if (status === 201 && updatedPoint) {
      dispatch(updateFeedbackModal(updatedPoint));
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
        <Containers.Feedback feedbacks={feedbacks} />
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
