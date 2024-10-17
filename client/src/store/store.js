import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/newsSlice'; // Adjust the import path as needed

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;