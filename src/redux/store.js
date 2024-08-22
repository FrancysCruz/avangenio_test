import { configureStore } from '@reduxjs/toolkit';
import arrayReducer from './arraySlice';

const store = configureStore({
  reducer: {
    sharedArray: arrayReducer,
  },
});

export default store;