import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import geoJSON from 'geojson';
import { defaultOptions } from '../../constants';
import Modal from '../Modals';
import PointService from '../../services';
import { closeFeedbackModal, openFeedbackModal } from '../Modals/FeedbackModal/slice';
import { closeCreationModal, openCreationModal } from '../Modals/CreationModal/slice';
import { selectMap, setCoordinates, setPoints } from './slice';
import {
  useFeedbackModalDispatch,
  useCreationModalDispatch,
  useMapSelector,
  useMapDispatch,
} from '../../redux/hooks';
import { TPoint } from '../../types';

function YMap() {
  const { points, coordinates } = useMapSelector(selectMap);

  const feedbackModalDispatch = useFeedbackModalDispatch();
  const creationModalDispatch = useCreationModalDispatch();
  const mapDispatch = useMapDispatch();

  const onLoad = async () => {
    // eslint-disable-next-line no-underscore-dangle
    const _points = await PointService.get();

    mapDispatch(setPoints(_points));
  };

  const onSubmit = async (data : Record<string, string>) => {
    // @ts-ignore
    const geoObject = geoJSON.parse({
      ...data,
      lat: coordinates[1],
      lng: coordinates[0],
    }, { Point: ['lat', 'lng'] });

    const { status, point } = await PointService.create({ data: geoObject });
    creationModalDispatch(closeCreationModal());

    if (status === 201) {
      mapDispatch(setPoints([...points, point]));
    }
  };

  const onDelete = async (id : string) => {
    const { status } = await PointService.remove({ id });
    feedbackModalDispatch(closeFeedbackModal());

    if (status === 204) {
      mapDispatch(setPoints(points.filter((point: TPoint) => point.id !== id)));
    }
  };

  const onPointSelect = async (id: string) => {
    const point = await PointService.getById({ id });
    feedbackModalDispatch(openFeedbackModal(point));
  };

  const onPointCreate = (e: any) => {
    mapDispatch(setCoordinates(e.get('coords')));
    creationModalDispatch(openCreationModal());
  };

  return (
    <YMaps>
      <Modal.Creation onSubmit={onSubmit}/>
      <Modal.Feedback onDelete={onDelete}/>
      <Map
        defaultState={{ center: [53.90, 27.56], zoom: 12 }}
        width="100wh"
        height="100vh"
        onLoad={onLoad}
        onContextMenu={(e: any) => onPointCreate(e)}
        modules={['geoObject.addon.hint']}
      >
        {points.map(({
          id, name, coords, type,
        }: any) => (
          <Placemark
            key={id}
            geometry={coords}
            options={defaultOptions(type)}
            properties={{ hintContent: name }}
            onClick={() => onPointSelect(id)}
          />
        ))}
      </Map>
    </YMaps>
  );
}

export default YMap;
