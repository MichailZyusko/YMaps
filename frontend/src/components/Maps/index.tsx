import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import axios from 'axios';
import geoJSON from 'geojson';
import defaultOptions from '../../constants/defaultOptions';
import ModalWindow from '../Modals';
import url from '../../constants/URLs';
// import Loader from '../Loader';
import { TPlacemark } from '../../types';

function MyMap() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [placemarks, setPlacemarks] = useState([] as TPlacemark[]);
  const [coordinates, setCoordinates] = useState([] as unknown as [number, number]);
  // const [isLoading, setIsLoading] = useState(true);

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const onLoad = async () => {
    const { data: points }: { data : TPlacemark[] } = await axios.get(url);

    setPlacemarks(points);
    // setIsLoading(false);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    // @ts-ignore
    const geoObject = geoJSON.parse({
      name: e.currentTarget.elements.name.value,
      description: e.currentTarget.elements.description.value,
      rating: [...e.currentTarget.elements.rating].find((item) => item.checked)?.value,
      lat: coordinates[1],
      lng: coordinates[0],
    }, { Point: ['lat', 'lng'] });

    const { status, data: point } = await axios.post(url, geoObject);

    if (status === 201) {
      setPlacemarks([...placemarks, point]);
      setIsOpenModal(false);
    }
  };

  return (
    <>
      {/* {isLoading && <Loader />} */}
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
            setIsOpenModal(true);
            setCoordinates(e.get('coords') as [number, number]);
          }}
          modules={['geoObject.addon.hint']}
        >
          {placemarks.map(({ id, name, coords }: any) => (
            <Placemark
              key={id}
              geometry={coords}
              options={defaultOptions}
              properties={{
                hintContent: name,
              }}
              onClick={async () => {
                // setIsLoading(true);
                const { data } = await axios.get(`${url}/${id}`);
                console.log(data);
                // setIsLoading(false);
              }}
            />
          ))}
        </Map>
      </YMaps>
    </>
  );
}

export default MyMap;
