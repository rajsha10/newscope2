import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: ['Politics', 'Sports', 'Technology', 'Health', 'Business', 'Entertainment', 'Science', 'World', 'Lifestyle'],
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
});

export const selectCategories = (state) => state.category.categories;

export default categorySlice.reducer;