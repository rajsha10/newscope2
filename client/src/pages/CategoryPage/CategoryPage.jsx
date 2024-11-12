// src/pages/CategoryPage/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NewsTiles } from '../../components';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get category from URL
  const articles = useSelector((state) => state.news.articles); // Get articles from Redux
  const filteredArticles = articles.filter(article => 
    article.category.toLowerCase() === categoryName.toLowerCase()
  ); // Filter articles by category

  return (
    <div className={styles.categoryPage}>
      <h1>{categoryName}</h1>
      {filteredArticles.length > 0 ? (
        <NewsTiles articles={filteredArticles} />
      ) : (
        <p>No articles available in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
