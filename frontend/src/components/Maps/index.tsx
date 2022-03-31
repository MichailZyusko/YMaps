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
  const [coordinates, setCoordinates] = useState([] as unknown as [number, number]);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onLoad = async () => {
    const { data } = await axios.get(url);
    const mappedPlacemarks = mappers(data) as TPlacemark[];

    setPlacemarks(mappedPlacemarks);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const { status, data } = await axios.post(url, {
      name: e.currentTarget.elements.name.value,
      description: e.currentTarget.elements.description.value,
      rating: [...e.currentTarget.elements.rating].find(item => item.checked)?.value,
      coordinates,
    });

    if (status === 201) {
      const newPlacemapk = mappers([data]) as TPlacemark[];

      setPlacemarks([...placemarks, ...newPlacemapk]);
      setIsOpenModal(false);
    }
  };

  return (
    <YMaps>
      <ModalWindow
        isOpen={isOpenModal}
        onClose={onCloseModal}
        onSubmit={onSubmit}
      />
      <Map
        defaultState={{ center: [53.90, 27.56], zoom: 12 }}
        width="100wh"
        height="100vh"
        onLoad={onLoad}
        onContextMenu={(e: any) => {
          setCoordinates(e.get('coords') as [number, number]);
          setIsOpenModal(true);
        }}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
      >
        {placemarks.map((placemark: TPlacemark) => (
          <Placemark
            key={placemark.id}
            geometry={placemark.coordinates}
            options={defaultOptions}
            properties={propForPlacemark(placemark)}
            onClick={async () => {
              const { data } = await axios.get(`${url}/${placemark.id}`);

              setPlacemarks(placemarks.map((item) => item.id === data.id ? {
                coordinates: [data.lat, data.lon],
                description: data.description,
                id: data.id,
                name: data.name,
                rating: data.rating,
              } : item) as TPlacemark[]);

              console.log(data);
            }}
          />
        ))}
      </Map>
    </YMaps>
  );
}

export default MyMap;
