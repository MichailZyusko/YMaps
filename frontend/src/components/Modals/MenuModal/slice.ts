/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface MenuModalState {
  value: {
    isOpen: boolean;
  };
}

const initialState: MenuModalState = {
  value: {
    isOpen: true,
    // window.localStorage.getItem('isFirstStart') === null
  },
};

export const menuModalSlice = createSlice({
  name: 'menuModal',
  initialState,
  reducers: {
    closeMenuModal: (state) => {
      state.value.isOpen = false;
      window.localStorage.setItem('isFirstStart', 'false');
    },
  },
});

export const { closeMenuModal } = menuModalSlice.actions;

export const selectMenuModal = (state: any) => state.menuModal.value;

export const menuModalReducer = menuModalSlice.reducer;
