/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { TPoint } from '../../types';

export interface MapsState {
  value: {
    points: TPoint[];
    coordinates: number[];
  };
}

const initialState: MapsState = {
  value: {
    points: [],
    coordinates: [],
  },
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setPoints: (state, action) => {
      state.value.points = action.payload;
    },
    setCoordinates: (state, action) => {
      state.value.coordinates = action.payload;
    },
  },
});

export const { setPoints, setCoordinates } = mapSlice.actions;

export const selectMap = (state: any) => state.map.value;

export const mapReducer = mapSlice.reducer;
