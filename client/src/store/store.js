import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/newsSlice';
import dropdownReducer from '../features/dropdownSlice';
import categoryReducer from '../features/categorySlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
    dropdown: dropdownReducer,
    category: categoryReducer,
  },
});

export default store;