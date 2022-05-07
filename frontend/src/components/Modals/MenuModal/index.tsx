import React from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import Containers from '../../Containers';
import style from './styles';
import Gifs from '../../../assets/gif';
import { useFeedbackModalDispatch, useMenuModalSelector } from '../../../redux/hooks';
import { closeMenuModal, selectMenuModal } from './slice';
import Gif from '../../Gifs';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// eslint-disable-next-line import/no-named-as-default
import { Screen, P } from './Components';
import Avatar from '../../../assets/pictures/avatar.png';
import Buttons from '../../Buttons';

Modal.setAppElement('#root');

export default function MenuModal() {
  const { isOpen } = useMenuModalSelector(selectMenuModal);
  const dispatch = useFeedbackModalDispatch();

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      style={style}
    >
      <Containers.Modal>
        <Carousel
          width={'100%'}
          emulateTouch
          stopOnHover
          // autoPlay
          interval={3000}
          showThumbs={false}
          showStatus={false}
          renderArrowNext={(clickHandler: () => void, hasNext: boolean) => (hasNext
            ? (<Buttons.Next onClick={clickHandler}>Next</Buttons.Next>)
            : (<Buttons.Next onClick={() => dispatch(closeMenuModal())}>Finish</Buttons.Next>))
          }
          renderArrowPrev={() => null}
        >
          <Screen header={'About author'}>
            <P>
              The creator of this program is Mikhail Zyusko,
              a third-year student of the ISEI.
            </P>
            <img
              src={Avatar}
              alt={'Michail Zyusko avatar'}
              style={{
                margin: '40px 0 0 0',
                borderRadius: '50%',
                width: '300px',
                height: '300px',
              }}/>
          </Screen>
          <Screen header={'About project'}>
            <P>This project was created as part of a course project on GIS</P>
            <P>The full source code of the program can be found&nbsp;
              <a href={'https://github.com/MichailZyusko/YMaps'} target={'_blank'}>here</a>
            </P>
          </Screen>
          <Screen header={'Instruction'}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Gif
                src={Gifs.creation}
                alt={'creation'}
                header={'Create new Point'}
                description={'Click RMB on the map to create a new point'}
              />
            </div>
          </Screen>
          <Screen header={'Instruction'}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Gif
                src={Gifs.leaveFeedback}
                alt={'leaveFeedback'}
                header={'Leave Feedback'}
                description={'Click LMB on the map to leave feedback'}
              />
            </div>
          </Screen>
          <Screen header={'Conclusion'}>
            <div style={{
              display: 'flex',
              height: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
             <h1 onClick={() => dispatch(closeMenuModal())}>Lets Go!</h1>
            </div>
          </Screen>
        </Carousel>
      </Containers.Modal>
    </Modal>
  );
}
