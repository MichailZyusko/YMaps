import React, { useState, useCallback } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import geoJSON from 'geojson';
import { defaultOptions } from '../../constants';
import { FeedbackModal, CreationModal } from '../Modals';
import PointService from '../../services';
import Loader from '../Loader';
import { TPoint } from '../../types';
import defaultPoint from '../../stubs';

type TState = {
  isFeedbackModalOpen: boolean;
  isCreationModalOpen: boolean;
  isLoading: boolean;
  points: TPoint[];
  selectedPoint: TPoint;
  coordinates: number[];
};

function YMap() {
  const [state, setState] = useState<TState>({
    isFeedbackModalOpen: false,
    isCreationModalOpen: false,
    isLoading: false,
    selectedPoint: defaultPoint,
    points: [],
    coordinates: [],
  });

  const onCloseCreationModal = useCallback(() => {
    setState({ ...state, isCreationModalOpen: false });
  }, [state.isCreationModalOpen]);

  const onCloseFeedbackModal = useCallback(() => {
    setState({ ...state, isFeedbackModalOpen: false });
  }, [state.isFeedbackModalOpen]);

  const onLoad = useCallback(async () => {
    const points = await PointService.get();

    setState({
      ...state,
      points,
      isLoading: false,
    });
  }, []);

  const onSubmit = useCallback(async (data : Record<string, string>) => {
    // @ts-ignore
    const geoObject = geoJSON.parse({
      ...data,
      lat: state.coordinates[1],
      lng: state.coordinates[0],
    }, { Point: ['lat', 'lng'] });

    const { status, point } = await PointService.create({ data: geoObject });

    if (status === 201) {
      setState({
        ...state,
        points: [...state.points, point],
        isCreationModalOpen: false,
      });
    }
  }, [state.isCreationModalOpen, state.points]);

  const onDelete = useCallback(async (id : string) => {
    const { status } = await PointService.remove({ id });

    if (status === 204) {
      setState({
        ...state,
        isFeedbackModalOpen: false,
        points: state.points.filter((point) => point.id !== id),
      });
    }
  }, [state.isFeedbackModalOpen, state.points]);

  const onPointSelect = useCallback(async (id: string) => {
    const point = await PointService.getById({ id });
    setState({
      ...state,
      selectedPoint: point,
      isFeedbackModalOpen: true,
    });
  }, [state.isFeedbackModalOpen, state.points]);

  const onPointCreate = useCallback((e: any) => {
    setState({
      ...state,
      coordinates: e.get('coords'),
      isCreationModalOpen: true,
    });
  }, [state.isCreationModalOpen, state.points]);

  if (state.isLoading) {
    return <Loader />;
  }

  return (
    <YMaps>
      <CreationModal
        isOpen={state.isCreationModalOpen}
        onClose={onCloseCreationModal}
        onSubmit={onSubmit}
      />
      <FeedbackModal
        isOpen={state.isFeedbackModalOpen}
        onClose={onCloseFeedbackModal}
        onDelete={onDelete}
        point={state.selectedPoint}
      />
      <Map
        defaultState={{ center: [53.90, 27.56], zoom: 12 }}
        width="100wh"
        height="100vh"
        onLoad={onLoad}
        onContextMenu={(e: any) => onPointCreate(e)}
        modules={['geoObject.addon.hint']}
      >
        {state.points.map(({ id, name, coords }: any) => (
          <Placemark
            key={id}
            geometry={coords}
            options={defaultOptions}
            properties={{ hintContent: name }}
            onClick={() => onPointSelect(id)}
          />
        ))}
      </Map>
    </YMaps>
  );
}

export default YMap;
