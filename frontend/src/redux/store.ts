import { configureStore } from '@reduxjs/toolkit';
import { feedbackModalReducer } from '../components/Modals/FeedbackModal/slice';
import { creationModalReducer } from '../components/Modals/CreationModal/slice';
import { menuModalReducer } from '../components/Modals/MenuModal/slice';
import { mapReducer } from '../components/Maps/slice';

export default configureStore({
  reducer: {
    feedbackModal: feedbackModalReducer,
    creationModal: creationModalReducer,
    menuModal: menuModalReducer,
    map: mapReducer,
  },
});
