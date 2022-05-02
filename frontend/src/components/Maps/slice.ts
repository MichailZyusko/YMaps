/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/types';
import { TPoint } from '../../types';

export interface MapsState {
  value: {
    points: TPoint[];
    coordinates: number[];
  };
  // status: 'idle' | 'loading' | 'failed';
}

const initialState: MapsState = {
  value: {
    points: [],
    coordinates: [],
  },
  // status: 'loading',
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
    // setStatus: (state, action) => {
    //   state.status = action.payload;
    // },
  },
});

export const { setPoints, setCoordinates } = mapSlice.actions;

export const selectMap = (state: RootState) => state.map.value;

export const mapReducer = mapSlice.reducer;
