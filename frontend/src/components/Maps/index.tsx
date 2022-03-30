import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import axios from 'axios';
import propForPlacemark from '../../helpers/propForPlacemark';
import defaultOptions from '../../constants/defaultOptions';
import ModalWindow from '../Modals';
import url from '../../constants/URLs';
import mappers from '../../helpers/mappers';
import { TPlacemark } from '../../types';

function MyMap() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [placemarks, setPlacemarks] = useState([] as TPlacemark[]);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  // const onAddPoint = (e: any) => {
  //   const name = prompt('Add name for point', 'У Ашота');
  //   const coords = e.get('coords');
  //   const placemark = {
  //     id: uuid(),
  //     coords,
  //     hintContent: name || 'У Ашота',
  //     description: 'Описание места',
  //     price: Math.floor(Math.random() * 100),
  //     rating: Math.floor(Math.random() * 5),
  //   };

  //   setPlacemarks([...placemarks, placemark]);
  // };

  return (
    <YMaps>
      <ModalWindow isOpen={isOpenModal} onClose={onCloseModal} />
      <Map
        defaultState={{ center: [53.90, 27.56], zoom: 12 }}
        width="100%"
        height="100vh"
        onLoad={async () => {
          const { data } = await axios({
            method: 'GET',
            url,
          });
          const mappedPlacemarks = mappers(data) as TPlacemark[];

          setPlacemarks(mappedPlacemarks);
        }}
        onContextMenu={() => setIsOpenModal(true)}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
      >
        {placemarks.map((placemark: TPlacemark) => (
          <Placemark
            key={placemark.id}
            geometry={placemark.coords}
            options={defaultOptions}
            properties={propForPlacemark(placemark)}
          />
        ))}
      </Map>
    </YMaps>
  );
}

export default MyMap;
