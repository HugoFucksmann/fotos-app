/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import photoReducer from '../reducers/photoReducer';
import toolTipReducer from '../reducers/toolTipReducer';

export const store = configureStore({
  reducer: {
    photos: photoReducer,
    toolTip: toolTipReducer,
  },
});
