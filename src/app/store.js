import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/team1Counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
