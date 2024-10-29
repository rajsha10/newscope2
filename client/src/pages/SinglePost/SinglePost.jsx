import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../features/newsSlice';
import { NewsTiles } from '../../components';
import styles from './SinglePost.module.css';

export default function SinglePost() {
  const { title } = useParams();
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  const decodedTitle = decodeURIComponent(title);
  const article = articles.find((article) => article.title === decodedTitle);
  
  const topRead = [...articles]
    .sort((a, b) => b.readCount - a.readCount)
    .slice(0, 5);

  if (loading) {
    return <div className={styles.loadingContainer}>
      <div className={styles.loader}></div>
      <p>Loading article...</p>
    </div>;
  }

  if (error) {
    return <div className={styles.errorContainer}>
      <h2>Error</h2>
      <p>{error}</p>
    </div>;
  }

  if (!article) {
    return <div className={styles.errorContainer}>
      <h2>Article Not Found</h2>
      <p>The article you're looking for doesn't exist or has been removed.</p>
    </div>;
  }

  return (
    <div className={styles.singlePost}>
      <article className={styles.mainContent}>
        <header className={styles.articleHeader}>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <div className={styles.articleMeta}>
            {article.author && (
              <div className={styles.authorInfo}>
                {article.author.avatar && (
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name}
                    className={styles.authorAvatar}
                  />
                )}
                <span className={styles.authorName}>By {article.author.name}</span>
              </div>
            )}
            <time className={styles.articleDate}>
              {formatDate(article.createdAt)}
            </time>
          </div>
        </header>

        <figure className={styles.featuredImage}>
          <img
            src={article.thumbnail}
            alt={article.title}
            className={styles.articleImage}
          />
          {article.imageCaption && (
            <figcaption className={styles.imageCaption}>
              {article.imageCaption}
            </figcaption>
          )}
        </figure>

        <div 
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: formatContent(article.description) }}
        />

        {article.videoUrl && (
          <div className={styles.videoContainer}>
            <iframe
              src={article.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </article>

      <aside className={styles.sidebar}>
        <div className={styles.popularArticles}>
          <h2 className={styles.sidebarTitle}>Popular Articles</h2>
          <NewsTiles articles={topRead} compact={true} />
        </div>
      </aside>
    </div>
  );
}

const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const formatContent = (content) => {
  // Replace newlines with paragraph tags
  return content
    .split('\n')
    .filter(paragraph => paragraph.trim() !== '')
    .map(paragraph => `<p>${paragraph}</p>`)
    .join('');
};