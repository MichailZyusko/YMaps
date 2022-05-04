/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TPoint } from '../../../types';

export interface FeedbackModalState {
  value: {
    isOpen: boolean;
    point: TPoint | null;
  };
}

const initialState: FeedbackModalState = {
  value: {
    isOpen: false,
    point: null,
  },
};

export const feedbackModalSlice = createSlice({
  name: 'feedbackModal',
  initialState,
  reducers: {
    openFeedbackModal: (state, action: PayloadAction<any>) => {
      state.value.isOpen = true;
      state.value.point = action.payload;
    },
    closeFeedbackModal: (state) => {
      state.value.isOpen = false;
      state.value.point = null;
    },
    updateFeedbackModal: (state, { payload }: PayloadAction<any>) => {
      state.value.point = payload;
    },
  },
});

export const {
  openFeedbackModal,
  closeFeedbackModal,
  updateFeedbackModal,
} = feedbackModalSlice.actions;

export const selectFeedbackModal = (state: any) => state.feedbackModal.value;

export const feedbackModalReducer = feedbackModalSlice.reducer;
