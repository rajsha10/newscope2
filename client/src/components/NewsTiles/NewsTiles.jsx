import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './NewsTiles.module.css';

const NewsTiles = () => {
   // Accessing state from Redux
  const { articles, loading, error } = useSelector((state) => state.news);

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination settings
  const articlesPerPage = 12;
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const [topReadSlideIndex, setTopReadSlideIndex] = useState(0);
  // Assuming that 'topRead' is the top 10 articles sorted by popularity
  const topRead = articles.slice(0, 10);

  // Function to go to the next page
  const nextPage = () => {
    if (indexOfLastArticle < articles.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Functions to handle Top Read slider navigation
  const nextTopReadSlide = () => {
    if (topReadSlideIndex < topRead.length / 2 - 1) {
      setTopReadSlideIndex(topReadSlideIndex + 1);
    }
  };

  const prevTopReadSlide = () => {
    if (topReadSlideIndex > 0) {
      setTopReadSlideIndex(topReadSlideIndex - 1);
    }
  };

  // Animate news tiles on mount
  useEffect(() => {
    const tiles = document.querySelectorAll(`.${styles.newsTile}`);
    tiles.forEach((tile, index) => {
      tile.style.animationDelay = `${index * 0.1}s`;
      tile.classList.add(styles.fadeInUp);
    });
  }, []);

  return (
    <div className={styles.newsTilesContainer}>
      {/* Conditional rendering for loading and error states */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      {!loading && !error && (
        <>
          {/* News Tiles Section */}
          <div className={styles.newsTiles}>
            {currentArticles.map((article) => (
              <div key={article._id} className={styles.newsTile}>
                <Link to={`/${article.title}`} style={{ textDecoration: 'none' }}>
                  <img src={article.thumbnail} alt={article.title} className={styles.tileThumbnail} />
                  <h3 className={styles.tileTitle}>{article.title}</h3>
                  <p className={styles.tileDescription}>{article.description.substring(0, 100)}...</p>
                  <div className={styles.tileAuthorDate}>
                    {article.author && <p className={styles.tileAuthor}>{article.author.name}</p>}
                    <p className={styles.tileDate}>{formatDate(article.createdAt)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

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

          {/* Top Read News Section as a Slider */}
          <div className={styles.topRead}>
            <h3 className={styles.topReadTitle}>Top Read</h3>
            <div className={styles.topReadSliderContainer}>
              <div
                className={styles.topReadSlider}
                style={{ transform: `translateX(-${topReadSlideIndex * 100}%)` }}
              >
                {topRead.map((article) => (
                  <div key={article._id} className={styles.topReadItem}>
                    <Link to={`/${article.title}`} style={{ textDecoration: 'none' }}>
                        <img src={article.thumbnail} alt={article.title} className={styles.topReadThumbnail} />
                        <p className={styles.topReadDescription}>{article.description.substring(0, 100)}...</p>
                    </Link>
                </div>
                ))}
              </div>
            </div>
            <div className={styles.sliderControls}>
              <button
                onClick={prevTopReadSlide}
                className={`${styles.sliderNavButton} ${styles.prevButton}`}
                disabled={topReadSlideIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={nextTopReadSlide}
                className={`${styles.sliderNavButton} ${styles.nextButton}`}
                disabled={topReadSlideIndex === topRead.length / 2 - 1}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default NewsTiles;
