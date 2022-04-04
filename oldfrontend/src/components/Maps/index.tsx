import React, { useState, useCallback } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import axios from 'axios';
import geoJSON from 'geojson';
import defaultOptions from '../../constants/defaultOptions';
import { FeedbackModal, CreationModal } from '../Modals';
import url from '../../constants/URLs';
import Loader from '../Loader';
import { TPoint } from '../../types';
import { defaultPoint } from '../../stubs';

function MyMap() {
  const [isOpenCreationModal, setIsOpenCreationModal] = useState(false);
  const [isOpenFeedbackModal, setIsOpenFeedbackModal] = useState(false);
  const [currentPoint, setCurrentPoint] = useState<TPoint>(defaultPoint);
  const [points, setPoints] = useState([] as TPoint[]);
  const [coordinates, setCoordinates] = useState([] as unknown as [number, number]);
  const [isLoading, setIsLoading] = useState(true);

  const onCloseCreationModal = useCallback(() => {
    setIsOpenCreationModal(false);
  }, [setIsOpenCreationModal]);

  const onCloseFeedbackModal = useCallback(() => {
    setIsOpenFeedbackModal(false);
  }, [setIsOpenFeedbackModal]);

  const onLoad = async () => {
    const { data }: { data : TPoint[] } = await axios.get(url);

    setPoints(data);
    setIsLoading(false);
  };

  const onSubmit = async (data : Record<string, string>) => {
    // @ts-ignore
    const geoObject = geoJSON.parse({
      ...data,
      lat: coordinates[1],
      lng: coordinates[0],
    }, { Point: ['lat', 'lng'] });

    const { status, data: point } = await axios.post(url, geoObject);

    if (status === 201) {
      setPoints([...points, point]);
      setIsOpenCreationModal(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <YMaps>
        <CreationModal
          isOpen={isOpenCreationModal}
          onClose={onCloseCreationModal}
          onSubmit={onSubmit}
        />
        <FeedbackModal
          isOpen={isOpenFeedbackModal}
          onClose={onCloseFeedbackModal}
          onSubmit={onSubmit}
          point={currentPoint}
        />
        <Map
          defaultState={{ center: [53.90, 27.56], zoom: 12 }}
          width="100wh"
          height="100vh"
          onLoad={onLoad}
          onContextMenu={(e: any) => {
            setIsOpenCreationModal(true);
            setCoordinates(e.get('coords') as [number, number]);
          }}
          modules={['geoObject.addon.hint']}
        >
          {points.map(({ id, name, coords }: any) => (
            <Placemark
              key={id}
              geometry={coords}
              options={defaultOptions}
              properties={{
                hintContent: name,
              }}
              onClick={async () => {
                setIsLoading(true);
                setIsOpenFeedbackModal(true);
                const { data } = await axios.get(`${url}/${id}`);
                setCurrentPoint(data);
                setIsLoading(false);
              }}
            />
          ))}
        </Map>
      </YMaps>
    </>
  );
}

export default MyMap;
