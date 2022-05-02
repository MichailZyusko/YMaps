/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/types';

export interface CreationModalState {
  value: {
    isOpen: boolean;
  };
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CreationModalState = {
  value: {
    isOpen: false,
  },
  status: 'idle',
};

export const creationModalSlice = createSlice({
  name: 'creationModal',
  initialState,
  reducers: {
    openCreationModal: (state) => {
      state.value.isOpen = true;
    },
    closeCreationModal: (state) => {
      state.value.isOpen = false;
    },
  },
});

export const { openCreationModal, closeCreationModal } = creationModalSlice.actions;

export const selectCreationModal = (state: RootState) => state.creationModal.value;

export const creationModalReducer = creationModalSlice.reducer;
