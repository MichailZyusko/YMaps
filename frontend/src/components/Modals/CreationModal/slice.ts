/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface CreationModalState {
  value: {
    isOpen: boolean;
  };
}

const initialState: CreationModalState = {
  value: {
    isOpen: false,
  },
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

export const selectCreationModal = (state: any) => state.creationModal.value;

export const creationModalReducer = creationModalSlice.reducer;
