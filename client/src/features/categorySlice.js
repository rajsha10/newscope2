import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Politics', 'Sports', 'Technology', 'Health', 'Business', 'Entertainment', 'Science', 'World', 'Lifestyle'],
  articles: [
    { id: 1, title: 'Article 1', category: 'Politics', content: 'Content of Article 1' },
    { id: 2, title: 'Article 2', category: 'Sports', content: 'Content of Article 2' },
    { id: 3, title: 'Article 3', category: 'Technology', content: 'Content of Article 3' },
    { id: 4, title: 'Article 4', category: 'Health', content: 'Content of Article 4' },
    { id: 5, title: 'Article 5', category: 'Business', content: 'Content of Article 5' },
    { id: 6, title: 'Article 6', category: 'Entertainment', content: 'Content of Article 6' },
    { id: 7, title: 'Article 7', category: 'Science', content: 'Content of Article 7' },
    { id: 8, title: 'Article 8', category: 'World', content: 'Content of Article 8' },
    { id: 9, title: 'Article 9', category: 'Lifestyle', content: 'Content of Article 9' },
  ],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
});

export const selectCategories = (state) => state.category.categories;
export const selectArticlesByCategory = (state, category) =>
  state.category.articles.filter((article) => article.category === category);

export default categorySlice.reducer;