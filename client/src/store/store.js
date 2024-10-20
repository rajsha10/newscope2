import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/newsSlice';
import dropdownReducer from '../features/dropdownSlice'

const store = configureStore({
  reducer: {
    news: newsReducer,
    dropdown: dropdownReducer,
  },
});

export default store;