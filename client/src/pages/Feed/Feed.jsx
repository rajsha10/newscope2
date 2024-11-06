// Feed.js
import { useEffect, useState } from 'react';
import styles from "./Feed.module.css";
import { Article, Hero, NewsTiles } from '../../components';
import { fetchNews } from '../../features/newsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Feed = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  // State to manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const topArticles = articles.slice(0, 5);
  const topRead = articles.slice(0, 10);

  // Calculate current articles for the page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Pagination functions
  const nextPage = () => {
    if (indexOfLastArticle < articles.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.feed}>
      {error && <p className={styles.error}>{error}</p>}

      {/* Loading Screen */}
      {loading && (
        <div className={styles.loadingScreen}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading news...</p>
        </div>
      )}

      {/* Hero Section */}
      {!loading && topArticles.length > 0 && <Hero articles={topArticles} />}

      {/* News Tiles Section */}
      {!loading && articles.length > 0 ? (
        <NewsTiles articles={articles} topRead={topRead} />
      ) : (
        <p> </p>
      )}

      {/* Display 10 Articles at a Time */}
        {!loading && currentArticles.length > 0 ? (
          currentArticles.map((item) => (
            <Link to={`/${item.title}`} key={item._id} style={{ textDecoration: 'none' }}>
              <div className={styles.article}>
                <h3 className={styles.articleTitle}>{item.title}</h3>
                <p className={styles.articleSummary}>{item.description.substring(0, 100)}...</p>
              </div>
            </Link>
          ))
        ) : (
          <p> </p>
        )}

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1} className={styles.paginationButton}>
          Previous
        </button>
        <span className={styles.paginationText}>Page {currentPage}</span>
        <button onClick={nextPage} disabled={indexOfLastArticle >= articles.length} className={styles.paginationButton}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Feed;