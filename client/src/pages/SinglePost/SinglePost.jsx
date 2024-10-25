import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../features/newsSlice';
import { NewsTiles, Article } from '../../components'; // Import necessary components
import styles from './SinglePost.module.css';

export default function SinglePost() {
  const { title } = useParams(); // Extract the title from the URL
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news); // Access Redux state

  // Fetch news if not already loaded
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  // Decode the URL-encoded title to match with the news articles
  const decodedTitle = decodeURIComponent(title);

  // Find the article based on the decoded title from the URL
  const article = articles.find((article) => article.title === decodedTitle);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when title changes
  }, [title]);

  if (loading) {
    return <p>Loading...</p>; // Display loading message
  }

  if (error) {
    return <p className={styles.error}>{error}</p>; // Display error message
  }

  if (!article) {
    return <p>No article found</p>; // Display message if no article is found
  }

  // Top 5 most-read articles (Create a copy of articles before sorting)
  const topRead = [...articles]
    .sort((a, b) => b.readCount - a.readCount)
    .slice(0, 5);

  return (
    <div className={styles.singlePost}>
      <div className={styles.singleNewsArea}>
        <div className={styles.singleNewsTile}>
          <img
            src={article.thumbnail}
            alt={article.title}
            className={styles.newsThumbnail}
          />
          <h3 className={styles.newsTitle}>{article.title}</h3>
          <p className={styles.newsDescription}>{article.description}...</p>
          {article.videoUrl && (
            <div className={styles.newsYoutube}>
              <iframe
                width="560"
                height="315"
                src={article.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className={styles.newsAuthorDate}>
            <p className={styles.newsAuthor}>{article.author.name}</p>
            <p className={styles.newsDate}>{formatDate(article.createdAt)}</p>
          </div>
        </div>
      </div>
      {/* Display top read articles in the NewsTiles component */}
      <NewsTiles articles={articles} topRead={topRead} />
    </div>
  );
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
