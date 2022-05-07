import React from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import Containers from '../../Containers';
import style from './styles';
import { useFeedbackModalDispatch, useMenuModalSelector } from '../../../redux/hooks';
import { closeMenuModal, selectMenuModal } from './slice';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Screen, P } from './Components';
import Buttons from '../../Buttons';
import Components from '../../General';
import Gif from '../../Gifs';
import Gifs from '../../../assets/gif';

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
          autoPlay
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
            <Components.Avatar />
          </Screen>
          <Screen header={'About project'}>
            <P>This project was created as part of a course project on GIS.</P>
            <br />
            <P>
              The main idea of the project is to create an
              interactive map of street food establishments.
              The project was created based on the YandexMaps API
              using modern React + Redux frontend
              ibraries.
              The language used was TypeScript.
              On the server side NodeJS is used,
              the database - MySQL and as a cloud provider was used AWS and PaaS Vercel.
            </P>
            <br />
            <P>The full source code of the program can be found&nbsp;
              <a href={'https://github.com/MichailZyusko/YMaps'} target={'_blank'}>here</a>
            </P>
          </Screen>
          <Screen header={'Instruction'}>
            <Containers.Gif>
              <Gif
                src={Gifs.creation}
                alt={'creation'}
                header={'Create new Point'}
                description={'Click RMB on the map to create a new point'}
              />
            </Containers.Gif>
          </Screen>
          <Screen header={'Instruction'}>
            <Containers.Gif>
              <Gif
                src={Gifs.leaveFeedback}
                alt={'leaveFeedback'}
                header={'Leave Feedback'}
                description={'Click LMB on the map to leave feedback'}
              />
            </Containers.Gif>
          </Screen>
          <Screen header={'Conclusion'}>
            <h1>Lets Go!</h1>
          </Screen>
        </Carousel>
      </Containers.Modal>
    </Modal>
  );
}
